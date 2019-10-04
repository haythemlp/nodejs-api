var express = require('express');
var router = express.Router();
var Home=require('../controllers/Home');
/* GET home page. */
router.get('/', Home.index);


module.exports = router;
