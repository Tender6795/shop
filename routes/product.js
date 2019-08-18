import express from 'express';
import * as ProductController from '../controllers/productController';


const router = express.Router();

router.post('/product', ProductController.create)
      .patch('/product/:_id', ProductController.update)
      .delete('/product/:_id', ProductController.deleteProduct);


export default router;