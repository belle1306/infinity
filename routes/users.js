var express = require('express');
var router = express.Router();
// const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API working');
});

/* GET all messages */
router.get("message", (req, res, next) => {
  db("SELECT * FROM message ORDER BY itemid ASC;")
      .then(results => {
          res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

/* GET all messages by id*/
router.get("/message/:id", (req, res, next) => {
  db(`SELECT * FROM message WHERE itemid= ${req.params["id"]};`)
      .then(results => res.send(results.data))
      .catch(res => res.status(500).send(err));

});

/* POST message */
router.post("/message", function(req, res, next) {
  let planetId = req.body.selectPlanets;
  let submitName = req.body.insertName;
  let submitMessage = req.body.insertMessage;
  console.log("printing", submitName, submitMessage)
  db(`INSERT INTO message(planet_id, name, message) VALUES (${JSON.stringify(planetId)},${JSON.stringify(submitName)}, ${JSON.stringify(submitMessage)};`)
  .then(results => {
    res.send(results);
    console.log("Successfully added");
  })
  .catch(err => res.status(500).send(err));
  // console.log("Please try again");
});



module.exports = router;
