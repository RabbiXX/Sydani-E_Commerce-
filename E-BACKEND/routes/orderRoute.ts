import express from 'express';
import type { Router } from 'express';
import {
    checkout,
    getUserOrders,
    getOneOrder
} from '../controllers/orderController.ts';
import { authenticate } from '../middleware/authMiddleware.ts';

const router: Router = express.Router();

// --- PROTECTED BUYER/USER ORDER ROUTES ---
// All order operations require the user to be authenticated

router.post(
    '/checkout',
    authenticate,
    checkout
);

router.get(
    '/',
    authenticate,
    getUserOrders
);

router.get(
    '/:id',
    authenticate,
    getOneOrder
);

export default router;