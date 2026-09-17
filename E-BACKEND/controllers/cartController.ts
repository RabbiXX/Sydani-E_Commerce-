import {
    getCartService,
    addToCartService,
    updateCartItemService,
    removeCartItemService,
    clearCartService
} from '../services/cartService.ts';
import type { AuthenticatedRequest } from '../middleware/authMiddleware.ts';
import { errorResponse, successResponse } from '../utils/responses.ts';
import codes from '../utils/statusCodes.ts';
import type { NextFunction, Response } from 'express';

export const getCart = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const cart = await getCartService(String(userId), res);

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Cart retrieved successfully.', cart);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- GET_CART_CONTROLLER ERROR ---', error);
        }
    }
};

export const addToCart = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const result = await addToCartService(
            String(userId),
            req.body,
            res
        );

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Item added to cart successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- ADD_TO_CART_CONTROLLER ERROR ---', error);
        }
    }
};

export const updateCartItem = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { id } = req.params; // Cart item ID

        const result = await updateCartItemService(
            String(userId),
            String(id),
            req.body,
            res
        );

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Cart item updated successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- UPDATE_CART_ITEM_CONTROLLER ERROR ---', error);
        }
    }
};

export const removeCartItem = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const { id } = req.params; // Cart item ID

        const result = await removeCartItemService(
            String(userId),
            String(id),
            res
        );

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Cart item removed successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- REMOVE_CART_ITEM_CONTROLLER ERROR ---', error);
        }
    }
};

export const clearCart = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Not authorized.');
        }

        const result = await clearCartService(String(userId), res);

        if (res.headersSent) {
            return;
        }

        return successResponse(res, codes.OK, 'Cart cleared successfully.', result);
    } catch (error: unknown) {
        if (!res.headersSent) {
            next(error);
        } else {
            console.error('--- CLEAR_CART_CONTROLLER ERROR ---', error);
        }
    }
};