var express = require('express');
var router = express.Router();

var shelters = [{
  id: 1,
  name: 'FAA',
  location: 'Barcelona'
}, {
  id: 2,
  name: 'BorgesCan',
  location: 'Lleida'
}];

router.get('/', function(req, res) {
  res.status(200).json(shelters);
});

module.exports = router;