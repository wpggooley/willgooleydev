var express = require('express');
var router = express.Router();
const Dragon = require('../models/fractals/dragon.js')
const Gosper = require('../models/fractals/gosper.js')
const Koch = require('../models/fractals/koch.js')

/* GET fractals. */
router.get('/', function(req, res, next) {
  res.render('fractals');
});

/* POST fractals. (should change back to get) */
router.post('/', function(req, res, next) {
  // parse out the request parameters
  var type = req.body.type;
  var iterations = parseInt(req.body.iterations);

  console.dir(`type: ${type}, iterations: ${iterations}`)

  // create the appropriate type of lsystem
  switch(type) {
    case 'dragon':
      var fractal = new Dragon();
      break;
    case 'gosper':
      var fractal = new Gosper();
      break;
    case 'koch':
      var fractal = new Koch();
      break;
    default:
      break;
  }

  // iterate the lsystem the appropriate number of times
  fractal.iterate(iterations);

  res.render('fractals', {type: type, fractal: fractal.axiom, angle: fractal.angle});
  // console.dir(fractal);
  // res.send(`${fractal.axiom}, ${fractal.angle}`);
});


module.exports = router;
