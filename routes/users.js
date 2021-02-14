var express = require('express');
var router = express.Router();
const db = require("../modal/helper");
const bodyParser = require("body-parser");
// const data = require("../data/planets.js");
// var jwt = require("jsonwebtoken");
// var userMustBeLogged = require("../guards/userMustBeLogged");

router.use(bodyParser.json());




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API working');
});

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

  router.get("/login/", (req, res, next) => {
    db(`SELECT * FROM login ORDER BY id ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });


  router.get("/user/", (req, res, next) => {
    db(`SELECT * FROM user ORDER BY id ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });

  router.get("/quiz/", (req, res, next) => {
    db(`SELECT * FROM quiz ORDER BY id ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });

  router.post("/quiz/", function(req, res, next) {
    let newUserId = req.body.user_id;
    let newScore = req.body.score;
    console.log("printing", newUserId, newScore,);
    // let sql=db(`INSERT INTO quiz(user_id, score) VALUES (${JSON.stringify(newUserId)}, ${JSON.stringify(newScore)});`)
    // .then(results => {
    //   res.send(results);
    //   console.log("Successfully added");
    // })
    // console.log(sql);
    db(`INSERT INTO quiz(user_id, score) VALUES (${JSON.stringify(newUserId)}, ${JSON.stringify(newScore)});`)
      .then(results => {
        res.send(results);
        console.log("Successfully added");
      })
      .catch(err => res.status(500).send(err));
      // console.log("Please try again");
    });

//WHERE id= parseInt(req.params.id)



//

module.exports = router;
