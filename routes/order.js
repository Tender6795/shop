import express from 'express';
import * as OrderController from '../controllers/orderController';
import isCashier from '../middlewares/isCashier'
import isShopAssistant from '../middlewares/isShopAssistant';
import isAccountant from "../middlewares/isAccountant";


const router =express.Router();

router.post('/order/:_id',isCashier,OrderController.create);
router.patch('/order/:_id',isShopAssistant,OrderController.done);
router.patch('/order/paid/:_id',isCashier,OrderController.paid);
router.get('/order/:date1/:date2',isAccountant,OrderController.getOrdersByDates);

export default router;