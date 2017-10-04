var express = require('express');
var router = express.Router();

var animals = [{
  id: 1,
  type: 'dog',
  name: 'spot',
  pictureUrl: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'
}, {
  id: 2,
  type: 'cat',
  name: 'tiger',
  pictureUrl: 'http://www.petmd.com/sites/default/files/sleepy-cat-125522297.jpg'
}];

router.get('/', function(req, res) {
  res.status(200).json(animals);
});

module.exports = router;
