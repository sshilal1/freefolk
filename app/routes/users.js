var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("got a request for /users");

  res.json([{
  	id: 1,
  	username: "username1"
  }, {
  	id: 2,
  	username: "testinguser2"
  }]);
});

module.exports = router;
