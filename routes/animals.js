var express = require('express');
var router = express.Router();

var animals = [{
  id: 1,
  type: 'dog',
  name: 'spot'
}, {
  id: 1,
  type: 'cat',
  name: 'tiger'
}];

router.get('/', function(req, res) {
  res.status(200).json(animals);
});

module.exports = router;
