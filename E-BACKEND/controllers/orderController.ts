import {
    checkoutService,
    getUserOrdersService,
    getOneOrderService
} from '../services/orderService.ts';
import type { AuthenticatedRequest } from '../middleware/authMiddleware.ts';
import { errorResponse, successResponse } from '../utils/responses.ts';
import codes from '../utils/statusCodes.ts';
import type { NextFunction, Response } from 'express';

export const checkout = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        // req.body contains the shippingAddress defined by the user
        const order = await checkoutService(String(userId), req.body, res);

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.CREATED, 'Checkout successful. Order placed!', order);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- CHECKOUT_CONTROLLER ERROR ---', error);
        }
    }
};

export const getUserOrders = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const orders = await getUserOrdersService(String(userId), res);

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Orders retrieved successfully.', orders);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_USER_ORDERS_CONTROLLER ERROR ---', error);
        }
    }
};

export const getOneOrder = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { id } = req.params;
        const order = await getOneOrderService(String(userId), String(id), res);

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Order retrieved successfully.', order);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_ONE_ORDER_CONTROLLER ERROR ---', error);
        }
    }
};