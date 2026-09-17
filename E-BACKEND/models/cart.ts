import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../config/database.ts';

// ==================== CART ITEM MODEL ====================

export interface CartItemAttributes {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CartItemCreationAttributes extends Optional<CartItemAttributes, 'id' | 'quantity'> {}

export class CartItem extends Model<CartItemAttributes, CartItemCreationAttributes> implements CartItemAttributes {
    public declare id: string;
    public declare cartId: string;
    public declare productId: string;
    public declare quantity: number;

    // Add this line to declare the association property
    public declare items?: CartItem[];

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

CartItem.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        cartId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'cart_id',
            references: {
                model: 'carts',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'product_id',
            references: {
                model: 'products',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: { min: 1 },
        },
    },
    {
        sequelize,
        tableName: 'cart_items',
        timestamps: true,
        underscored: true,
    }
);

// ==================== CART MODEL ====================

export interface CartAttributes {
    id: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CartCreationAttributes extends Optional<CartAttributes, 'id'> {}

export class Cart extends Model<CartAttributes, CartCreationAttributes> implements CartAttributes {
    public declare id: string;
    public declare userId: string;

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

Cart.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        tableName: 'carts',
        timestamps: true,
        underscored: true,
    }
);

export default Cart;