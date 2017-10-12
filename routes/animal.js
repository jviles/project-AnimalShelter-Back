const express    = require('express');
const router     = express.Router();
const Animal = require('../models/animal');
const Shelter= require ('../models/shelter');

router.get('/', (req, res, next) => {
  Animal.find({}, (err, animal) => {
    if (err) { return res.status(500).json(err); }

    return res.json(animal);
  });
});

router.get('/:id', (req, res, next) => {
  Animal.findById(req.params.id, (err, animal) => {
    if (err)         { return res.status(500).json(err); }
    if (!animal) { return res.status(404).json(new Error("404")) }

    return res.json(animal);
  });
});

router.get('/by-shelter/:id', (req, res, next) => {
  console.log ("inside");
  Animal.find({shelterId: req.params.id}, (err, animal) => {
    if (err) {
      next(err);
    }
    if (!animal) {
      return res.json(false);
    }
    console.log("animals",animal);
    return res.json(animal);
  });
});


router.post('/', (req, res, next) => {
  console.log (req.body.shelterId);
  var shelterId=req.body.shelterId;
  const newAnimal = new Animal({
    name: req.body.name,
    image: req.body.image,
    age: req.body.age,
    size: req.body.size,
    color: req.body.color,
    sex: req.body.sex,
    breed: req.body.breed,
    shelterId: req.body.shelterId// fas el requeriment al body
  });
  
  newAnimal.save( (err,animal) => {
    console.log("presave");
    
    if (err) { return res.status(500).json(err); }
    Shelter.findByIdAndUpdate(shelterId, { $push: {Animals: animal._id}}, (err)=>{
    if (err) {
      console.log(err);
      return res.send(500);
    }
  });
      
    return res.status(200).json(newAnimal);
  });
});


module.exports = router;
