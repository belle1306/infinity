var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const db = require("../modal/helper");
=======
const db = require("../model/helper");
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638
const bodyParser = require("body-parser");
// const data = require("../data/planets.js");

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API working');
});

<<<<<<< HEAD
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
=======
// GET planets from data folder 
// router.get('/planets', function(req, res, next) {
//   res.send(data);
// });

router.get("/planets", (req, res, next) => {
  db(`SELECT * FROM planet;`)
      .then(results => {
          res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

router.get("/planets/:id", (req, res, next) => {
  db(`SELECT * FROM planet WHERE id =${req.params.id};`)
      .then(results => {
          res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

/* GET all messages by id*/
router.get("/message/", (req, res, next) => {
  db(`SELECT * FROM message ORDER BY id ASC;`)
      .then(results => res.send(results.data))
      .catch(res => res.status(500).send(err));

});

router.get("/message/:id", (req, res, next) => {
  db(`SELECT * FROM message WHERE id= ${req.params.id}`)
      .then(results => res.send(results.data))
      .catch(res => res.status(500).send(err));

});

/* POST message */
router.post("/message", function(req, res, next) {
  let newPlanets = req.body.planet_id;
  let newMessage = req.body.message;
  console.log("printing", newPlanets, newMessage);
  // let sql = `INSERT INTO message(
  //   planet_id, 
  //   message
  //   ) VALUES (
  //     ${JSON.stringify(newPlanets)}, 
  //     ${JSON.stringify(newMessage)}
  //     );`
  //     console.log(sql);
  db(
    `INSERT INTO message(planet_id, message) VALUES (${JSON.stringify(newPlanets)}, ${JSON.stringify(newMessage)});`
    )
    .then(results => {
      res.send(results);
      console.log("Successfully added");
    })
    .catch(err => res.status(500).send(err));
    // console.log("Please try again");
  });
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638



module.exports = router;
