import express from 'express';
const router =  express.Router();
import * as UserController from './user.controller';

router.get('/',UserController.getUsers);
router.post('/', UserController.createUser);

export default router;