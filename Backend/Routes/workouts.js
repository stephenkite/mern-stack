//to use the express router we need to require express first.
const express = require('express');
const Workout = require('../models/workoutModel');

// We use the express router to gain access to the express app in server.js
// This creates an instance of the router for us.
const router = express.Router();

// Attach a request handler to the router
// To GET all workouts.
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'}) // A property called message
});

//To GET a single workout.
//The colon indicates a parameter which can change.
router.get('/:id',(req, res) => {
  res.json({mssg: 'Get a single workout'})
});

//To POST a new workout.
router.post('/', async (req, res) => {
  const {title, load, reps} = req.body;

  try{
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

//To DELETE a workout.
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

//To UPDATE a workout.
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

//Exporting the router
module.exports = router;