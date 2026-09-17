import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../config/database.ts';

// Define fixed order statuses
export const OrderStatus = {
    PENDING: 'pending',
    PAID: 'paid',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

export interface OrderAttributes {
    id: string;
    userId: string;
    totalAmount: number;
    status: OrderStatus;
    shippingAddress: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface OrderCreationAttributes extends Optional<OrderAttributes, 'id' | 'status'> { }

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    public declare id: string;
    public declare userId: string;
    public declare totalAmount: number;
    public declare status: OrderStatus;
    public declare shippingAddress: string;

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;
}

Order.init(
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
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'total_amount',
            validate: { min: 0 },
        },
        status: {
            type: DataTypes.ENUM(...Object.values(OrderStatus)),
            allowNull: false,
            defaultValue: OrderStatus.PENDING,
        },
        shippingAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'shipping_address',
            validate: { notEmpty: true },
        },
    },
    {
        sequelize,
        tableName: 'orders',
        timestamps: true,
        underscored: true,
    }
);

export default Order;