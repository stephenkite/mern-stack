const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1});

  res.status(200).json(workouts); // send a response and json response which is the workouts sent to the client
}

// get a single workout
const getWorkout = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'});
  }
  const workout = await Workout.findById(id);
  // if that workout does not exist(if we don't get a workout back)
  if (!workout) {
    return res.status(404).json({error: 'No such workout'}); // we are returning because we don't want it to continue and fire the rest of the code
  }

  res.status(200).json(workout);
}

// create new workout
const createWorkout = async (req,res) => {
  const {title, load, reps} = req.body;

  // add doc to db
  try{
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout

// update a workout


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout
}