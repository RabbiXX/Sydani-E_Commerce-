import { errorResponse } from '../utils/responses.ts';
import codes from '../utils/statusCodes.ts';
import { Product, User } from '../models/index.ts';
import { uploadMultipleToCloudinary } from './uploadService.ts';
import type { Response } from 'express';
import type { ProductCategory } from '../models/product.ts';

export interface CreateProductPayload {
    title: string;
    description: string;
    price: number | string;
    stock?: number | string;
    category: ProductCategory;
    [key: string]: any;
}

export interface PaginationOptions {
    page?: number | string;
    limit?: number | string;
    category?: string;
    search?: string;
}

export interface PaginatedProductsResult {
    products: Product[];
    pagination: {
        totalProducts: number;
        currentPage: number;
        totalPages: number;
        limit: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
}

export const createProductService = async (
    payload: CreateProductPayload,
    sellerId: string,
    files?: Express.Multer.File[], // <--- Accepts an array of files
    res?: Response
) => {
    // 1. Verify user exists and has the 'seller' role
    const user = await User.findByPk(sellerId);
    if (!user || user.role !== 'seller') {
        if (res) {
            return errorResponse(res, codes.FORBIDDEN, 'Access denied. Only registered sellers can create products.');
        }
        throw new Error('Forbidden: Only sellers can create products.');
    }

    const { title, description, price, stock, category } = payload;

    // Check if product with the same title already exists for this seller
    const existingProduct = await Product.findOne({ where: { title, sellerId } });
    if (existingProduct && res) {
        return errorResponse(res, codes.CONFLICT, 'You already have a product listed with this title.');
    }

    let imageUrls: string[] = [];

    // Handle multiple file uploads to Cloudinary if images are provided
    if (files && files.length > 0) {
        try {
            const uploadResults = await uploadMultipleToCloudinary(files);
            imageUrls = uploadResults.map((result) => result.secure_url);
        } catch (uploadError: any) {
            console.error('Cloudinary multiple upload failed:', uploadError);
            if (res) {
                return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Failed to upload product images.');
            }
            throw new Error('Failed to upload product images.');
        }
    }

    try {
        const product = await Product.create({
            title,
            description,
            price: Number(price),
            stock: stock !== undefined ? Number(stock) : 0,
            category,
            images: imageUrls, // <--- Saves the array of image URLs
            sellerId,
        });

        return product;
    } catch (error: any) {
        console.error('Create product error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while creating product.');
        }
        throw error;
    }
};

export const getAllProductsService = async (options: PaginationOptions = {}): Promise<PaginatedProductsResult> => {
    const { page = 1, limit = 10, category } = options;

    const pageNum = Math.max(1, typeof page === "string" ? parseInt(page, 10) || 1 : page);
    const limitNum = Math.min(100, Math.max(1, typeof limit === "string" ? parseInt(limit, 10) || 10 : limit));
    const offset = (pageNum - 1) * limitNum;

    const whereClause: Record<string, any> = {};
    if (category) {
        whereClause.category = category;
    }

    const { count: totalProducts, rows: products } = await Product.findAndCountAll({
        where: whereClause,
        include: [
            {
                model: User,
                as: 'seller',
                attributes: ['id', 'fullName', 'email', 'phone'],
            },
        ],
        order: [['createdAt', 'DESC']],
        limit: limitNum,
        offset: offset,
    });

    const totalPages = Math.ceil(totalProducts / limitNum);

    return {
        products,
        pagination: {
            totalProducts,
            currentPage: pageNum,
            totalPages,
            limit: limitNum,
            hasNextPage: pageNum < totalPages,
            hasPrevPage: pageNum > 1,
        },
    };
};

/**
 * Fetch products created exclusively by a specific logged-in seller
 */
export const getSellerProductsService = async (
    sellerId: string, 
    options: PaginationOptions = {}
): Promise<PaginatedProductsResult> => {
    const { page = 1, limit = 10, category } = options;

    const pageNum = Math.max(1, typeof page === "string" ? parseInt(page, 10) || 1 : page);
    const limitNum = Math.min(100, Math.max(1, typeof limit === "string" ? parseInt(limit, 10) || 10 : limit));
    const offset = (pageNum - 1) * limitNum;

    const whereClause: Record<string, any> = { sellerId };
    if (category) {
        whereClause.category = category;
    }

    const { count: totalProducts, rows: products } = await Product.findAndCountAll({
        where: whereClause,
        order: [['createdAt', 'DESC']],
        limit: limitNum,
        offset: offset,
    });

    const totalPages = Math.ceil(totalProducts / limitNum);

    return {
        products,
        pagination: {
            totalProducts,
            currentPage: pageNum,
            totalPages,
            limit: limitNum,
            hasNextPage: pageNum < totalPages,
            hasPrevPage: pageNum > 1,
        },
    };
};

export const getOneProductService = async (id: string): Promise<Product | null> => {
    const product = await Product.findByPk(id, {
        include: [
            {
                model: User,
                as: 'seller',
                attributes: ['id', 'fullName', 'email', 'phone'],
            },
        ],
    });

    return product;
};

export const updateProductService = async (
    id: string,
    sellerId: string,
    updateData: Record<string, any>,
    files?: Express.Multer.File[], // <--- Accepts an array of files for updates
    res?: Response
) => {
    const product = await Product.findByPk(id);

    if (!product) {
        if (res) return errorResponse(res, codes.NOT_FOUND, 'The product is not found.');
        return null;
    }

    // Verify that the user updating the product is the owner/seller
    if (product.sellerId !== sellerId) {
        if (res) return errorResponse(res, codes.FORBIDDEN, 'You are not authorized to update this product.');
        throw new Error('Forbidden');
    }

    let images = product.images;
    if (files && files.length > 0) {
        try {
            const uploadResults = await uploadMultipleToCloudinary(files);
            images = uploadResults.map((result) => result.secure_url);
        } catch (uploadError: any) {
            console.error('Cloudinary update upload failed:', uploadError);
            if (res) return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Failed to upload new product images.');
            throw new Error('Failed to upload images');
        }
    }

    const payloadToUpdate = {
        ...updateData,
        images, // <--- Updates with new image array if provided, otherwise retains existing
    };

    await product.update(payloadToUpdate);

    return await Product.findByPk(id, {
        include: [
            {
                model: User,
                as: 'seller',
                attributes: ['id', 'fullName', 'email', 'phone'],
            },
        ],
    });
};

export const deleteProductService = async (id: string, sellerId: string, res?: Response) => {
    const product = await Product.findByPk(id);

    if (!product) {
        if (res) return errorResponse(res, codes.NOT_FOUND, 'The product is not found.');
        return null;
    }

    // Verify ownership check
    if (product.sellerId !== sellerId) {
        if (res) return errorResponse(res, codes.FORBIDDEN, 'You are not authorized to delete this product.');
        throw new Error('Forbidden');
    }

    const deletedProductData = product.toJSON();
    await product.destroy();

    return deletedProductData;
};