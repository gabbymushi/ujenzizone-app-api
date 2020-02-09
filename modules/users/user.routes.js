const Router = require('express');
const router = new Router();
const UserController = require('./user.controller');

router.get('/',UserController.getUsers);
router.post('/', UserController.createUser);

module.exports = router;