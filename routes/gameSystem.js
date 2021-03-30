var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gameSystem', { title: 'Poker App' });
});

module.exports = router;