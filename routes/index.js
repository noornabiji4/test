var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', (req, res) => {
  res.render('test');
});
router.get('/newTest', (req, res) => {
  res.render('newTest');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});
router.get('/login', (req, res) => {
  res.render('login');
});


module.exports = router;
