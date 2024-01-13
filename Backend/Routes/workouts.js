const express = require('express');

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
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout'})
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