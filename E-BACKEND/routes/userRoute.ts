import express from 'express';
import type { Router } from 'express';
import {
    signUp,
    signIn,
    requestOtpController,
    verifyOtpController,
    resetPasswordController,
    getAllUsersController,
    updateUserController,
    deleteUserController,
    getCurrentUserController
} from '../controllers/userController.ts';
import { authenticate } from '../middleware/authMiddleware.ts';
import validateUser from '../middleware/validateUser.ts';

const router: Router = express.Router();

router.get('/me', authenticate, getCurrentUserController);

router.post('/signup', validateUser, signUp);
router.post('/signin', signIn);
router.post('/request-otp', requestOtpController);
router.post('/verify-otp', verifyOtpController);
router.post('/reset-password', resetPasswordController);

router.get('/all', authenticate, getAllUsersController);
router.put('/update/:id', authenticate, updateUserController);
router.delete('/delete/:id', authenticate, deleteUserController);

export default router;