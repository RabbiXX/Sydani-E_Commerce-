import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import bcrypt from 'bcryptjs';
import { sequelize } from '../config/database.ts';

export const UserRole = {
    BUYER: 'buyer',
    SELLER: 'seller',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

// 1. Attributes interface matching DB columns
export interface UserAttributes {
    id: string;
    fullName: string;
    email: string;
    password: string;
    role: UserRole;
    phone?: string | null;
    otpCode?: string | null;
    otpExpiresAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Attributes optional when calling User.create()
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'role' | 'phone' | 'otpCode' | 'otpExpiresAt'> { }

// 3. Model class definition
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public declare id: string;
    public declare fullName: string;
    public declare email: string;
    public declare password: string;
    public declare role: UserRole;
    public declare phone: string | null;
    public declare otpCode: string | null;
    public declare otpExpiresAt: Date | null;

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;

    // Instance method to check passwords during login
    public async matchPassword(enteredPassword: string): Promise<boolean> {
        return await bcrypt.compare(enteredPassword, this.password);
    }

    // Automatically hide password and OTP when user model is converted to JSON/sent to client
    public toJSON() {
        const { password, otpCode, ...values } = this.get();
        return values;
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'full_name',
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(...Object.values(UserRole)),
            defaultValue: UserRole.BUYER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        otpCode: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'otp_code',
        },
        otpExpiresAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'otp_expires_at',
        },
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true,
        underscored: true,
        hooks: {
            beforeCreate: async (user: User) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
            beforeUpdate: async (user: User) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
        },
    }
);

export default User;