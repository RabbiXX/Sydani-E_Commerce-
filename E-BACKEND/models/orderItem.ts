import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../config/database.ts';

export interface OrderItemAttributes {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    priceAtPurchase: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, 'id'> { }

export class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
    public declare id: string;
    public declare orderId: string;
    public declare productId: string;
    public declare quantity: number;
    public declare priceAtPurchase: number;

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

OrderItem.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'order_id',
            references: {
                model: 'orders',
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
            onDelete: 'RESTRICT', // Prevents deleting a product if it's tied to an existing historical order item
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: { min: 1 },
        },
        priceAtPurchase: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'price_at_purchase',
            validate: { min: 0 },
        },
    },
    {
        sequelize,
        tableName: 'order_items',
        timestamps: true,
        underscored: true,
    }
);

export default OrderItem;