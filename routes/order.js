import express from 'express';
import * as OrderController from '../controllers/orderController';
import isCashier from '../middlewares/isCashier'
import isShopAssistant from '../middlewares/isShopAssistant';

const router =express.Router();

router.get('/order/:hash',isCashier,OrderController.create);
router.patch('/order/:hash',isShopAssistant,OrderController.done);

export default router;