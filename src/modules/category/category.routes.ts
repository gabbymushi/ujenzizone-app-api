import express from 'express';
const router =  express.Router();
import * as CategoryController from './category.controller';

router.get('/',CategoryController.geCategories);
router.post('/', CategoryController.createCategory);

export default router;