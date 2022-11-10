var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'Search Results icecream' });
});
var express = require('express');
const icecream_controllers= require('../controllers/icecream');
var router = express.Router();
/* GET costumes */
router.get('/', icecream_controllers.icecream_view_all_Page );
module.exports = router;