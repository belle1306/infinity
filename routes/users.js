var express = require('express');
var router = express.Router();
const db = require("../modal/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//get questions
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//get planets

router.get('/planets', function(req, res, next) {
  res.send('respond with a resource');
});

//get scores

//post scores

module.exports = router;
