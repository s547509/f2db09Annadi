var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
 }

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('icecream', {title:'Search Results icecream'});
// });
/* GET detail icecream page */ 
router.get('/detail',secured, icecream_controlers.icecream_view_one_Page);
/* GET icecream */ 
router.get('/', icecream_controlers.icecream_view_all_Page );
/* GET create icecream page */ 
router.get('/create',secured, icecream_controlers.icecream_create_Page); 
/* GET create update page */ 
router.get('/update',secured, icecream_controlers.icecream_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, icecream_controlers.icecream_delete_Page); 
// GET request for one icecream. 
router.get('/icecream/:id', icecream_controlers.icecream_detail); 
module.exports = router;
 

 
