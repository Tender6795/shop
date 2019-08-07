import express from 'express';
import * as ProductController from '../controllers/productController';


const router = express.Router();

router.post('/product', ProductController.create)
      .patch('/product/:hash', ProductController.update)
      .delete('/product/:hash', ProductController.deleteProduct);


export default router;