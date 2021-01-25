var express = require('express');
var router = express.Router();
// const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
