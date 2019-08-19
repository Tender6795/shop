import express from 'express';
import * as ProductController from '../controllers/productController';
import productValidator from '../middlewares/productValidator';

const router = express.Router();

router.post('/product',productValidator, ProductController.create)
      .patch('/product/:_id',productValidator, ProductController.update)
      .delete('/product/:_id', ProductController.deleteProduct);


export default router;