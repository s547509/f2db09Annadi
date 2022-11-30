var express = require('express');
var passport = require('passport');
var router = express.Router();
var account = require('../models/account');
// var icecreams_controller = require('../controller/icecreams');

router.get('/', function (req, res) {
    res.render('index', { title: 'icecreams App', user : req.user });
});
router.get('/register', function(req, res) {
    res.render('register', { title: 'icecreams App Registration'});
});
router.post('/register', function(req, res) {
  account.findOne({ username : req.body.username },
    function(err, user) {
      if(err) {
        return res.render('register', { title: 'Registration',
                  message: 'Registration error', account : req.body.username })
      }
      if(user == {} ){
        return res.render('register', { title: 'Registration',
                   message: 'Existing User', account : req.body.username })
      }
      let newaccount = new account({ username : req.body.username });
      account.register(newaccount, req.body.password, function(err, user){
        if (err) {
          return res.render('register', { title: 'Registration',
                    message: 'access error', account : req.body.username })
        }
        if(!user){
          return res.render('register',{ title: 'Registration',
                    message: 'access error', account : req.body.username })
        }
        console.log('Success, redirect');
        res.redirect('/');
      })
    })
  })
router.get('/login', function(req, res) {
    res.render('login', { title: 'icecreams App Login', user : req.user });
});
router.post('/login', passport.authenticate('local'), function(req, res) {
  if(req.session.returnTo) 
      res.redirect(req.session.returnTo); 
    res.redirect('/');
});
router.get('/logout', function(req, res) {
    req.logout(err=>{
      if(err)
      {
       return err;
      }
      else
      res.redirect('/');
    });
});
router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


module.exports = router;