const express    = require('express');
const router     = express.Router();
const Shelter      = require('../models/shelter');

router.get('/', (req, res, next) => {
  Shelter.find({}, (err, shelter) => {
    if (err) { return res.json(err).status(500); }

    return res.json(shelter);
  });
});

router.get('/:id', (req, res, next) => {
  Shelter.findById(req.params.id, (err, shelter) => {
    if (err)         { return res.status(500).json(err); }
    if (!shelter)      { return res.status(404).json(new Error("404")) }

    return res.json(shelter);
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body.sheltersname);
  const newShelter = new Shelter({
    sheltersname: req.body.sheltersname,
    direction: req.body.direction,
    number: req.body.number,
    zipcode: req.body.zipcode,
  });

  newShelter.save( (err) => {
    if (err) { return res.status(500).json(err); }

    return res.status(200).json(newShelter);
  });
});

module.exports = router;