var express = require('express');
var router = express.Router();
var AuthMiddleware=require('../middlewares/Auth');
var User=require('../controllers/User');



router.get('/', AuthMiddleware.check, User.index);
router.get('/:id', User.show);
router.delete('/:id', User.delete);

module.exports = router;
