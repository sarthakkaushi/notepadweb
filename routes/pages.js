var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contact-us', function(req, res, next) {
  res.render('pages/contact',{title:"Contact Us"})
});


router.get('/privacy-policy', function(req, res, next) {
  res.render('pages/privacy',{title:"Privacy Policy"})
});


router.get('/disclaimer', function(req, res, next) {
  res.render('pages/disclaimer',{title:"Disclaimer"})
});

module.exports = router;
