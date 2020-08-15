import express from 'express';
const router = express.Router();
import * as UserController from './user.controller';
import validator from './user.validator'

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);

export default router;