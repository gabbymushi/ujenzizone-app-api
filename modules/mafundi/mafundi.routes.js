const Router = require('express');
const router = new Router();
const MafundiController = require('./mafundi.controller');

//router.get('/',MafundiController.create);
router.post('/', MafundiController.create);

module.exports = router;