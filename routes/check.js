import express from 'express';
import * as ChechController from '../controllers/checkController';
import isCashier from '../middlewares/isCashier'



const router =express.Router();


router.get('/check/:hash',isCashier,ChechController.createCheck);

export default router;