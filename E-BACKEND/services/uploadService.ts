import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import streamifier from 'streamifier';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// Configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer storage with a generous file size limit (e.g., 10MB per product image)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
    fileFilter: (_req, file, cb) => {
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.jfif'];
        const ext = path.extname(file.originalname).toLowerCase();

        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/jpg'];
        
        const isAllowedMime = file.mimetype.startsWith('image/') || allowedMimeTypes.includes(file.mimetype);
        const isAllowedExt = allowedExtensions.includes(ext);

        if (isAllowedMime || isAllowedExt) {
            cb(null, true);
        } else {
            cb(new Error(`Only image files are allowed for products! Received mimetype: ${file.mimetype}, extension: ${ext}`));
        }
    }
});

/**
 * Upload a single product image buffer to Cloudinary
 */
export const uploadToCloudinary = (buffer: Buffer): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { 
                folder: 'ecommerce-products', // Custom folder name for your e-commerce platform
                resource_type: 'image'        // Explicitly set to image for product catalogs
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};

/**
 * Upload multiple product image buffers to Cloudinary concurrently
 */
export const uploadMultipleToCloudinary = async (files: Express.Multer.File[]): Promise<UploadApiResponse[]> => {
    const uploadPromises = files.map((file) => uploadToCloudinary(file.buffer));
    return Promise.all(uploadPromises);
};

export default upload;