var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Alien Invasion */
router.get('/Aliens', function(req, res, next) {
  res.render('alien');
});
/* GET 2048 game */
router.get('/2048', function(req, res, next) {
  res.render('2048');
});

module.exports = router;
