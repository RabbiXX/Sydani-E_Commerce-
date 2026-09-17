import { 
    createProductService,
    getAllProductsService,
    getSellerProductsService,
    getOneProductService,
    updateProductService,
    deleteProductService
} from '../services/productService.ts';
import type { AuthenticatedRequest } from '../middleware/authMiddleware.ts';
import { errorResponse, successResponse } from '../utils/responses.ts';
import codes from '../utils/statusCodes.ts';
import type { NextFunction, Response } from 'express';

export const createProduct = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        // Pass req.files (casted as an array of files) instead of req.file
        const result = await createProductService(
            req.body, 
            String(sellerId), 
            req.files as Express.Multer.File[], 
            res
        );

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.CREATED, 'Product created successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- CREATE_PRODUCT_CONTROLLER ERROR ---', error);
        }
    }
};

export const getAllProducts = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const { page, limit, category } = req.query;

        const result = await getAllProductsService({
            page: page as string | undefined,
            limit: limit as string | undefined,
            category: category as string | undefined,
        });

        return successResponse(res, codes.OK, 'Products retrieved successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_ALL_PRODUCTS_CONTROLLER ERROR ---', error);
        }
    }
};

export const getSellerProducts = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { page, limit, category } = req.query;

        const result = await getSellerProductsService(String(sellerId), {
            page: page as string | undefined,
            limit: limit as string | undefined,
            category: category as string | undefined,
        });

        return successResponse(res, codes.OK, 'Seller products retrieved successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_SELLER_PRODUCTS_CONTROLLER ERROR ---', error);
        }
    }
};

export const getOneProduct = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const { id } = req.params;
        const product = await getOneProductService(String(id));

        if (!product) {
            return errorResponse(res, codes.NOT_FOUND, 'Product not found.');
        }

        return successResponse(res, codes.OK, 'Product retrieved successfully.', product);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_ONE_PRODUCT_CONTROLLER ERROR ---', error);
        }
    }
};

export const updateProduct = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { id } = req.params;
        const { title, description, price, stock, category } = req.body;

        const updateData: Record<string, any> = {};
        if (title !== undefined) updateData.title = title;
        if (description !== undefined) updateData.description = description;
        if (price !== undefined) updateData.price = price;
        if (stock !== undefined) updateData.stock = stock;
        if (category !== undefined) updateData.category = category;

        // Pass req.files (casted as an array of files) instead of req.file
        const updatedProduct = await updateProductService(
            String(id), 
            String(sellerId), 
            updateData, 
            req.files as Express.Multer.File[], 
            res
        );

        if (res.headersSent) {
            return;
        }

        if (!updatedProduct) {
            return errorResponse(res, codes.NOT_FOUND, 'Product not found.');
        }

        return successResponse(res, codes.OK, 'Product updated successfully.', updatedProduct);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- UPDATE_PRODUCT_CONTROLLER ERROR ---', error);
        }
    }
};

export const deleteProduct = async (
    req: AuthenticatedRequest, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    try {
        const sellerId = req.user?.id;
        if (!sellerId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { id } = req.params;

        const deletedProduct = await deleteProductService(String(id), String(sellerId), res);

        if (res.headersSent) {
            return;
        }

        if (!deletedProduct) {
            return errorResponse(res, codes.NOT_FOUND, 'Product not found.');
        }

        return successResponse(res, codes.OK, 'Product deleted successfully.', deletedProduct);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- DELETE_PRODUCT_CONTROLLER ERROR ---', error);
        }
    }
};