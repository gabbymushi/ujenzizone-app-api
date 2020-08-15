import { body, validationResult } from "express-validator";

export default [
    body('username').isEmail(),
    body('password').isLength({ min: 5 })
];
