import { errorResponse, successResponse } from '../utils/responses.ts';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import codes from '../utils/statusCodes.ts';
import { generateTokens } from '../utils/utils.ts';
import User, { UserRole } from '../models/user.ts';
// import { sequelize } from '../config/database.ts';
import type { Response } from 'express';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const getTransporter = () => {
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim().replace(/\s+/g, '');

    if (!user || !pass) {
        throw new Error('EMAIL_USER or EMAIL_PASS environment variables are missing.');
    }

    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // false for port 587 (STARTTLS)
        auth: {
            user,
            pass,
        },
        family: 4, // Forces IPv4 to avoid network unreachable issues
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
    } as nodemailer.TransportOptions);
};

export interface SignUpPayload {
    email: string;
    password: string;
    fullName: string;
    role?: UserRole;
    phone?: string | null;
    [key: string]: any;
}

export interface PaginationOptions {
    page?: number | string;
    limit?: number | string;
}

export interface PaginatedUsersResult {
    users: User[];
    pagination: {
        totalUsers: number;
        currentPage: number;
        totalPages: number;
        limit: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
}

export const signUpService = async (payload: SignUpPayload, res: Response) => {
    const { email, password, fullName, role, phone, ...rest } = payload;

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return errorResponse(res, codes.CONFLICT, 'Email is already registered.');
    }

    try {
        const user = await User.create({
            email,
            password,
            fullName,
            role: role || UserRole.BUYER,
            phone: phone || null,
            ...rest,
        });

        if (!user) {
            return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'User registration failed.');
        }

        const tokens = generateTokens(user.get({ plain: true }));

        return {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            phone: user.phone,
            ...tokens,
        };
    } catch (error: any) {
        console.error('Sign-up failed:', error);
        return errorResponse(res, codes.INTERNAL_SERVER_ERROR, 'Internal server error during registration.');
    }
};

export const signInService = async ({ email, password }: { email: string; password: string }, res: Response) => {
    if (!email || !password) {
        return errorResponse(res, codes.BAD_REQUEST, 'Email and password are required.');
    }

    try {
        const fullEmail = email.toLowerCase().trim();
        console.log('--- DEBUG SIGNIN --- Attempting login for email:', fullEmail);

        // Find user by email case-insensitively and explicitly include the password field
        const user = await User.findOne({
            where: { email: { [Op.iLike]: fullEmail } },
            attributes: { include: ['password'] }
        });

        if (!user) {
            console.log('--- DEBUG SIGNIN --- User not found in database!');
            return errorResponse(res, codes.UNAUTHORIZED, 'Invalid email or password.');
        }

        console.log('--- DEBUG SIGNIN --- User found. Stored hash preview:', user.password ? user.password.substring(0, 10) : 'NO PASSWORD FOUND');

        // Compare entered password with stored hashed password using the model instance method
        const isMatch = await user.matchPassword(password);
        console.log('--- DEBUG SIGNIN --- Password match result:', isMatch);

        if (!isMatch) {
            return errorResponse(res, codes.UNAUTHORIZED, 'Invalid email or password.');
        }

        // Generate tokens using plain user data
        const plainUserForToken = user.get({ plain: true }) as { id: string; email: string; role: string; [key: string]: any };
        delete plainUserForToken.password;
        delete plainUserForToken.otpCode;

        const tokens = generateTokens(plainUserForToken);

        // Prepare clean user response object
        const plainUser = user.get({ plain: true }) as { id: string; email: string; role: string; [key: string]: any };
        delete plainUser.password;
        delete plainUser.otpCode;

        return {
            user: plainUser,
            role: user.role,
            ...tokens,
        };
    } catch (err: any) {
        console.error('--- SIGN_IN_SERVICE ERROR ---', err);
        return errorResponse(
            res,
            codes.INTERNAL_SERVER_ERROR,
            err.message || 'An error occurred during sign-in.'
        );
    }
};

export const requestOtpService = async (emailInput: any, res: Response) => {
    const rawEmail = typeof emailInput === 'object' && emailInput !== null
        ? (emailInput.email || emailInput.body?.email)
        : emailInput;

    if (!rawEmail || typeof rawEmail !== 'string') {
        return errorResponse(res, codes.BAD_REQUEST, 'Email is required.');
    }

    try {
        const fullEmail = rawEmail.toLowerCase().trim();
        const user = await User.findOne({
            where: {
                email: { [Op.iLike]: fullEmail }
            }
        });

        if (!user) {
            return errorResponse(res, codes.NOT_FOUND, 'User with this email not found.');
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        console.log('----------------------------------------');
        console.log(`[DEV OTP CODE for ${fullEmail}]: ${otp}`);
        console.log('----------------------------------------');

        user.otpCode = otp;
        user.otpExpiresAt = expiresAt;
        await user.save();

        try {
            const transporter = getTransporter();
            const emailUser = process.env.EMAIL_USER || '';

            await transporter.sendMail({
                from: `"E-Commerce Support" <${emailUser.trim()}>`,
                to: fullEmail,
                subject: 'Your Password Reset / Verification OTP Code',
                html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Password Reset Code</h2>
          <p>Your one-time verification code is:</p>
          <p style="font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #2563eb;">${otp}</p>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
            });
        } catch (smtpErr: any) {
            console.warn('[SMTP Warning] Email delivery failed, but OTP is saved and printed above:', smtpErr.message);
        }

        return successResponse(res, codes.OK, 'OTP generated successfully.');
    } catch (err: any) {
        console.error('--- REQUEST_OTP_SERVICE ERROR ---', err);
        return errorResponse(
            res,
            codes.INTERNAL_SERVER_ERROR,
            err.message || 'Failed to process OTP request.'
        );
    }
};

export const verifyOtpService = async (email: string, otp: string, res: Response) => {
    if (!email || !otp) {
        return errorResponse(res, codes.BAD_REQUEST, 'Email and OTP code are required.');
    }

    try {
        const fullEmail = email.toLowerCase().trim();
        const cleanOtp = String(otp).trim();

        const user = await User.findOne({
            where: { email: { [Op.iLike]: fullEmail } }
        });

        if (!user) {
            return errorResponse(res, codes.NOT_FOUND, 'User not found.');
        }

        const dbOtpCode = user.otpCode;
        if (!dbOtpCode || String(dbOtpCode) !== cleanOtp) {
            return errorResponse(res, codes.BAD_REQUEST, 'Invalid OTP code.');
        }

        const currentTime = new Date();
        const dbExpiry = user.otpExpiresAt;
        const expiryTime = dbExpiry ? new Date(dbExpiry) : new Date(0);

        if (expiryTime < currentTime) {
            return errorResponse(res, codes.BAD_REQUEST, 'OTP code has expired.');
        }

        user.otpCode = null;
        user.otpExpiresAt = null;
        await user.save();

        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'my_access_secret',
            { expiresIn: '1d' }
        );

        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.JWT_REFRESH_SECRET || '12345',
            { expiresIn: '7d' }
        );

        return successResponse(res, codes.OK, 'Verification successful.', {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
                phone: user.phone,
            },
        });
    } catch (err: any) {
        console.error('--- VERIFY_OTP_SERVICE ERROR ---', err);
        return errorResponse(
            res,
            codes.INTERNAL_SERVER_ERROR,
            err.message || 'Verification failed.'
        );
    }
};

export const getAllUsersService = async (options: PaginationOptions = {}): Promise<PaginatedUsersResult> => {
    const { page = 1, limit = 10 } = options;

    const pageNum = Math.max(1, typeof page === "string" ? parseInt(page, 10) || 1 : page);
    const limitNum = Math.min(100, Math.max(1, typeof limit === "string" ? parseInt(limit, 10) || 10 : limit));
    const offset = (pageNum - 1) * limitNum;

    const { count: totalUsers, rows: users } = await User.findAndCountAll({
        attributes: { exclude: ['password', 'otpCode'] },
        order: [['createdAt', 'DESC']],
        limit: limitNum,
        offset: offset,
    });

    const totalPages = Math.ceil(totalUsers / limitNum);

    return {
        users,
        pagination: {
            totalUsers,
            currentPage: pageNum,
            totalPages,
            limit: limitNum,
            hasNextPage: pageNum < totalPages,
            hasPrevPage: pageNum > 1,
        },
    };
};

export const updateUserService = async (
    id: string,
    updateData: Record<string, any>
): Promise<User | null> => {
    const [affectedCount] = await User.update(updateData, {
        where: { id },
    });

    if (affectedCount === 0) {
        return null;
    }

    return await User.findByPk(id, {
        attributes: { exclude: ['password', 'otpCode'] },
    });
};

export const deleteUserService = async (id: string): Promise<Record<string, any> | null> => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password', 'otpCode'] },
    });

    if (!user) {
        return null;
    }

    const deletedUserData = user.toJSON();
    await user.destroy();
    return deletedUserData;
};

export const getCurrentUserService = async (userId: string): Promise<User | null> => {
    const user = await User.findByPk(userId, {
        attributes: { exclude: ['password', 'otpCode'] },
    });
    return user;
};

export const resetPasswordService = async (
    email: string,
    otp: string,
    newPassword: string,
    res: Response
) => {
    if (!email || !otp || !newPassword) {
        return errorResponse(res, codes.BAD_REQUEST, 'Email, OTP code, and new password are required.');
    }

    try {
        const fullEmail = email.toLowerCase().trim();
        const cleanOtp = String(otp).trim();

        // 1. Find user by email
        const user = await User.findOne({
            where: { email: { [Op.iLike]: fullEmail } }
        });

        if (!user) {
            return errorResponse(res, codes.NOT_FOUND, 'User not found.');
        }

        // 2. Validate OTP code match
        const dbOtpCode = user.otpCode;
        if (!dbOtpCode || String(dbOtpCode) !== cleanOtp) {
            return errorResponse(res, codes.BAD_REQUEST, 'Invalid OTP code.');
        }

        // 3. Validate OTP expiration
        const currentTime = new Date();
        const dbExpiry = user.otpExpiresAt;
        const expiryTime = dbExpiry ? new Date(dbExpiry) : new Date(0);

        if (expiryTime < currentTime) {
            return errorResponse(res, codes.BAD_REQUEST, 'OTP code has expired.');
        }

        // 4. Assign plain new password (model beforeUpdate hook will securely hash it)
        user.password = newPassword;
        user.otpCode = null;
        user.otpExpiresAt = null;
        await user.save();

        return successResponse(res, codes.OK, 'Password reset successful. You can now log in with your new password.');
    } catch (err: any) {
        console.error('--- RESET_PASSWORD_SERVICE ERROR ---', err);
        return errorResponse(
            res,
            codes.INTERNAL_SERVER_ERROR,
            err.message || 'Password reset failed.'
        );
    }
};