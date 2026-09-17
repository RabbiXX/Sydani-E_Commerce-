import { sequelize } from '../config/database.ts';
import User from './user.ts';
import Product from './product.ts';
import Cart, { CartItem } from './cart.ts';
import Order from './order.ts';
import OrderItem from './orderItem.ts';

// 1. User & Product Relationships
// A user (specifically a seller) can list many products
User.hasMany(Product, {
    foreignKey: 'sellerId',
    as: 'products',
    onDelete: 'CASCADE',
});

// A product belongs to a specific user (seller)
Product.belongsTo(User, {
    foreignKey: 'sellerId',
    as: 'seller',
});

// 2. User & Cart Relationships
// A user has one cart
User.hasOne(Cart, {
    foreignKey: 'userId',
    as: 'cart',
    onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

// 3. Cart & CartItem Relationships
// A cart has many items
Cart.hasMany(CartItem, {
    foreignKey: 'cartId',
    as: 'items',
    onDelete: 'CASCADE',
});

CartItem.belongsTo(Cart, {
    foreignKey: 'cartId',
    as: 'cart',
});

// 4. Product & CartItem Relationships
// A product can be referenced by many cart items
Product.hasMany(CartItem, {
    foreignKey: 'productId',
    as: 'cartItems',
    onDelete: 'CASCADE',
});

CartItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product',
});

// 5. User & Order Relationships
// A user can place many orders
User.hasMany(Order, {
    foreignKey: 'userId',
    as: 'orders',
    onDelete: 'CASCADE',
});

Order.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

// 6. Order & OrderItem Relationships
// An order has many items
Order.hasMany(OrderItem, {
    foreignKey: 'orderId',
    as: 'items',
    onDelete: 'CASCADE',
});

OrderItem.belongsTo(Order, {
    foreignKey: 'orderId',
    as: 'order',
});

// 7. Product & OrderItem Relationships
// A product can appear in many historical order items
Product.hasMany(OrderItem, {
    foreignKey: 'productId',
    as: 'orderItems',
    onDelete: 'RESTRICT',
});

OrderItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product',
});

export {
    sequelize,
    User,
    Product,
    Cart,
    CartItem,
    Order,
    OrderItem,
};