import express from 'express';
import * as CheckController from '../controllers/checkController';
import isCashier from '../middlewares/isCashier'



const router =express.Router();


router.post('/check/:hash',isCashier,CheckController.createCheck);

export default router;