var express = require('express');
var router = express.Router();

/* GET fractals. */
router.get('/', function(req, res, next) {
  res.render('fractals');
});

module.exports = router;
