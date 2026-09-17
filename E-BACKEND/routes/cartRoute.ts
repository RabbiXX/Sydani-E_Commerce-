import express from 'express';
import type { Router } from 'express';
import {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart
} from '../controllers/cartController.ts';
import { authenticate } from '../middleware/authMiddleware.ts';

const router: Router = express.Router();

// --- PROTECTED BUYER/USER CART ROUTES ---
// All cart operations require the user to be authenticated

router.get(
    '/',
    authenticate,
    getCart
);

router.post(
    '/items',
    authenticate,
    addToCart
);

router.put(
    '/items/:id',
    authenticate,
    updateCartItem
);

router.delete(
    '/items/:id',
    authenticate,
    removeCartItem
);

router.delete(
    '/clear',
    authenticate,
    clearCart
);

export default router;