import express from 'express';
import * as AuthController from '../controllers/authController';

const router =express.Router();

router.post('/signup',AuthController.signup);
router.post('/signin',AuthController.signin);

export default router;