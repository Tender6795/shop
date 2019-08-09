import express from 'express';
import * as OrderController from '../controllers/orderController';
import isCashier from '../middlewares/isCashier'
import isShopAssistant from '../middlewares/isShopAssistant';


const router =express.Router();

router.post('/order/:hash',isCashier,OrderController.create);
router.patch('/order/:hash',isShopAssistant,OrderController.done);
router.patch('/order/paid/:hash',isCashier,OrderController.paid);

export default router;