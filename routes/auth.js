import express from 'express';
import * as AuthController from '../controllers/authController';
import personalValidator from '../middlewares/personalValidator';

const router =express.Router();

router.post('/signup',personalValidator,AuthController.signup);
router.post('/signin',personalValidator,AuthController.signin);

export default router;