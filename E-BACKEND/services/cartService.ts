import { errorResponse } from '../utils/responses.ts';
import codes from '../utils/statusCodes.ts';
import { Cart, CartItem, Product } from '../models/index.ts';
import type { Response } from 'express';

export interface AddToCartPayload {
    productId: string;
    quantity: number | string;
    [key: string]: any;
}

export interface UpdateCartItemPayload {
    quantity: number | string;
    [key: string]: any;
}

/**
 * Fetch the user's cart along with all cart items and associated product details.
 * Automatically creates a cart if one doesn't exist yet for the user.
 */
export const getCartService = async (userId: string, res?: Response) => {
    try {
        let cart = await Cart.findOne({
            where: { userId },
            include: [
                {
                    model: CartItem,
                    as: 'items',
                    include: [
                        {
                            model: Product,
                            as: 'product',
                        },
                    ],
                },
            ],
        });

        if (!cart) {
            cart = await Cart.create({ userId });
            // Re-fetch to return the correct nested association structure
            cart = await Cart.findOne({
                where: { userId },
                include: [
                    {
                        model: CartItem,
                        as: 'items',
                        include: [
                            {
                                model: Product,
                                as: 'product',
                            },
                        ],
                    },
                ],
            });
        }

        return cart;
    } catch (error: any) {
        console.error('Get cart error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while fetching cart.');
        }
        throw error;
    }
};

/**
 * Add a product to the user's cart or increment quantity if it already exists.
 */
export const addToCartService = async (
    userId: string,
    payload: AddToCartPayload,
    res?: Response
) => {
    const { productId, quantity } = payload;
    const parsedQuantity = Number(quantity) || 1;

    if (parsedQuantity < 1) {
        if (res) {
            return errorResponse(res, codes.BAD_REQUEST, 'Quantity must be at least 1.');
        }
        throw new Error('Invalid quantity');
    }

    try {
        // 1. Verify product exists
        const product = await Product.findByPk(productId);
        if (!product) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'The product is not found.');
            }
            throw new Error('Product not found');
        }

        // 2. Validate: Check if requested quantity exceeds available stock
        if (product.stock < parsedQuantity) {
            if (res) {
                return errorResponse(res, codes.BAD_REQUEST, 'Requested quantity exceeds available stock.');
            }
            throw new Error('Insufficient stock');
        }

        // 3. Find or create user cart
        let cart = await Cart.findOne({ where: { userId } });
        if (!cart) {
            cart = await Cart.create({ userId });
        }

        // 4. Check if the item already exists in the cart
        let cartItem = await CartItem.findOne({
            where: { cartId: cart.id, productId },
        });

        if (cartItem) {
            const newQuantity = cartItem.quantity + parsedQuantity;
            
            // Validate: Check if the cumulative quantity in the cart exceeds stock
            if (product.stock < newQuantity) {
                if (res) {
                    return errorResponse(res, codes.BAD_REQUEST, 'Total quantity in cart exceeds available stock.');
                }
                throw new Error('Insufficient stock');
            }

            await cartItem.update({ quantity: newQuantity });
        } else {
            cartItem = await CartItem.create({
                cartId: cart.id,
                productId,
                quantity: parsedQuantity,
            });
        }

        // Return updated full cart state
        return await getCartService(userId, res);
    } catch (error: any) {
        // If it's our handled error response, let it pass through
        if (res && res.headersSent) {
            return;
        }
        console.error('Add to cart error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while adding to cart.');
        }
        throw error;
    }
};

/**
 * Update the quantity of a specific cart item.
 */
export const updateCartItemService = async (
    userId: string,
    itemId: string,
    payload: UpdateCartItemPayload,
    res?: Response
) => {
    const { quantity } = payload;
    const parsedQuantity = Number(quantity);

    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
        if (res) {
            return errorResponse(res, codes.BAD_REQUEST, 'Quantity must be a valid number of at least 1.');
        }
        throw new Error('Invalid quantity');
    }

    try {
        const cart = await Cart.findOne({ where: { userId } });
        if (!cart) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'Cart not found.');
            }
            throw new Error('Cart not found');
        }

        const cartItem = await CartItem.findOne({
            where: { id: itemId, cartId: cart.id },
            include: [{ model: Product, as: 'product' }],
        });

        if (!cartItem) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'Cart item not found.');
            }
            throw new Error('Cart item not found');
        }

        const product = (cartItem as any).product;
        if (product && product.stock < parsedQuantity) {
            if (res) {
                return errorResponse(res, codes.BAD_REQUEST, 'Requested quantity exceeds available stock.');
            }
            throw new Error('Insufficient stock');
        }

        await cartItem.update({ quantity: parsedQuantity });

        return await getCartService(userId, res);
    } catch (error: any) {
        console.error('Update cart item error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while updating cart item.');
        }
        throw error;
    }
};

/**
 * Remove a specific item from the user's cart.
 */
export const removeCartItemService = async (
    userId: string,
    itemId: string,
    res?: Response
) => {
    try {
        const cart = await Cart.findOne({ where: { userId } });
        if (!cart) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'Cart not found.');
            }
            throw new Error('Cart not found');
        }

        const cartItem = await CartItem.findOne({
            where: { id: itemId, cartId: cart.id },
        });

        if (!cartItem) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'Cart item not found.');
            }
            throw new Error('Cart item not found');
        }

        await cartItem.destroy();

        return await getCartService(userId, res);
    } catch (error: any) {
        console.error('Remove cart item error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while removing cart item.');
        }
        throw error;
    }
};

/**
 * Clear all items from the user's cart (useful after successful checkout).
 */
export const clearCartService = async (userId: string, res?: Response) => {
    try {
        const cart = await Cart.findOne({ where: { userId } });
        if (!cart) {
            if (res) {
                return errorResponse(res, codes.NOT_FOUND, 'Cart not found.');
            }
            return null;
        }

        await CartItem.destroy({ where: { cartId: cart.id } });

        return await getCartService(userId, res);
    } catch (error: any) {
        console.error('Clear cart error:', error);
        if (res) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error while clearing cart.');
        }
        throw error;
    }
};