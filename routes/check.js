import express from 'express';
import * as CheckController from '../controllers/checkController';
import isCashier from '../middlewares/isCashier'



const router =express.Router();


router.post('/check/:_id',isCashier,CheckController.createCheck);

export default router;