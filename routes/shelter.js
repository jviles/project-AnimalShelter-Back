const express    = require('express');
const router     = express.Router();
const Shelter      = require('../models/shelter');

router.get('/', (req, res, next) => {
  Shelter.find({}, (err, shelters) => {
    if (err) {
      next(err);
    }
    return res.json(shelters);
  });
});

router.get('/:id', (req, res, next) => {
  Shelter.findById(req.params.id, (err, shelter) => {
    if (err) {
      next(err);
    }
    if (!shelter) { 
      return res.status(404).json(new Error("404"));
    }
    return res.json(shelter);
  });
});

router.get('/by-user/:id', (req, res, next) => {
  Shelter.findOne({user: req.params.id}, (err, shelter) => {
    if (err) {
      next(err);
    }
    if (!shelter) {
      return res.json(false);
    }
    return res.json(shelter);
  });
});

router.post('/', (req, res, next) => {
  console.log('BODY', req.body);
  const newShelter = new Shelter({
    name: req.body.name,
    direction: req.body.direction,
    number: req.body.number,
    zipcode: req.body.zipcode,
    user: req.user.id
  });

  newShelter.save( (err) => {
    if (err) {
      next(err);
    }
    return res.status(200).json(newShelter);
  });
});

module.exports = router;