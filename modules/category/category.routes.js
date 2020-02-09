const Router = require('express');
const router = new Router();
const CategoryController = require('./category.controller');

router.get('/',CategoryController.geCategories);

module.exports = router;