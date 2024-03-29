//to use the express router we need to require express first.
const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');

// We use the express router to gain access to the express app in server.js
// This creates an instance of the router for us.
const router = express.Router();

// Attach a request handler to the router
// To GET all workouts.
router.get('/', getWorkouts);

//To GET a single workout.
//The colon indicates a parameter which can change.
router.get('/:id', getWorkout);

//To POST a new workout.
router.post('/', createWorkout);

//To DELETE a workout.
router.delete('/:id', deleteWorkout);

//To UPDATE a workout.
router.patch('/:id',updateWorkout);

//Exporting the router
module.exports = router;