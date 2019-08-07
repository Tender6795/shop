import express from 'express';
import * as OrderController from '../controllers/orderController';
import isCashier from '../middlewares/isCashier'

const router =express.Router();

router.post('/createOrder',isCashier,OrderController.create);


export default router;