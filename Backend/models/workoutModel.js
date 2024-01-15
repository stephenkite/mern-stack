const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating a schema, what should our data(a workout document) look like
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true }); //first argument describes how the object looks, 2nd automatically adds a created at property and when it was last updated property

// Creates for us a model that we'll import in other files.
module.exports = mongoose.model('workout', workoutSchema);
