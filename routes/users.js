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

//get all
router.get("/planet", (req, res) => {
  // Send back the full list of items
  db(`SELECT * FROM planet ORDER BY id ASC`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


router.get("/quiz", (req, res) => {
  // Send back the full list of items
  db(`SELECT * FROM quiz ORDER BY id ASC`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/user", (req, res) => {
  // Send back the full list of items
  db(`SELECT * FROM user ORDER BY id ASC`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


router.post("/quiz", (req, res, next) => {
  // The request's body is available in req.body
  // If the query is successfull you should send back the full list of items
  // Add your code here
  const newScore = req.body.score;
  const newUserId = req.body.userId;
  //WHERE id = ${req.params.userId}
  db(`INSERT INTO quiz (score, user_id) VALUES(${newScore},${newUserId});`) //check how to stringify//db(`INSERT INTO items (text,complete) VALUES(${JSON.stringify(newText)}, ${newComplete});`)
    .then(results => {
      results.data = results.insertId;
      console.log(results, insertId, "is the id, also data: \n", results.data);
      res.send(results);
      console.log("Updated");
    })

    .catch(err => res.status(500).send(err));
  //console.log("ID not found");
});


//post scores



module.exports = router;
