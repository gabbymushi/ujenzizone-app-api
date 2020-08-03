import express from 'express';
const router =  express.Router();
import * as MafundiController from './mafundi.controller';

router.get('/',MafundiController.getMafundi);
router.post('/', MafundiController.create);

export default router;