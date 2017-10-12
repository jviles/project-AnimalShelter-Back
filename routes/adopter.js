const express    = require('express');
const router     = express.Router();
const Adopter      = require('../models/adopter');

router.get('/', (req, res, next) => {
  Adopter.find({}, (err, shelters) => {
    if (err) {
      next(err);
    }
    return res.json(shelters);
  });
});

router.post('/', (req, res, next) => {
    console.log('BODY', req.body);
    const newAdopter = new Adopter({
      name: req.body.name,
      surname: req.body.direction,
      email: req.body.number,
      phonenumber: req.body.zipcode,
      shelterId: req.body.shelterId
    });

    newAdopter.save( (err) => {
        console.log("presave");
        if (err) { return res.status(500).json(err); }
    
        return res.status(200).json(newAdopter);
    });
});
    
module.exports = router;