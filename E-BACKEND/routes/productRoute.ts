import express from 'express';
import type { Router } from 'express';
import {
    createProduct,
    getAllProducts,
    getSellerProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.ts';
import { authenticate, authorize } from '../middleware/authMiddleware.ts';
import upload from '../services/uploadService.ts';

const router: Router = express.Router();

// --- PUBLIC ROUTES ---
router.get('/all', getAllProducts);
router.get('/:id', getOneProduct);

// --- PROTECTED SELLER ROUTES ---
// Only users who are logged in AND have the 'seller' role can access these:

router.get(
    '/seller/my-products',
    authenticate,
    authorize('seller'),
    getSellerProducts
);

router.post(
    '/create',
    authenticate,
    authorize('seller'),
    upload.array('images', 5), // <--- Allows multiple files under the key 'images'
    createProduct
);

router.put(
    '/update/:id',
    authenticate,
    authorize('seller'),
    upload.array('images', 5), // <--- Allows multiple files under the key 'images'
    updateProduct
);

router.delete(
    '/delete/:id',
    authenticate,
    authorize('seller'),
    deleteProduct
);

export default router;