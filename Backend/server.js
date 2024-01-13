// This is the entry file for the application where we are going to register the express app

// require the dotenv package, invoke the config method on it which will attach the environment variables to the process.env object
require('dotenv').config();

// creating the express application - it is found in the node modules folder
const express = require('express');
//require the router which was exported(inside workouts.js) containing all the different routes
const workoutRoutes = require('./Routes/workouts');

// starting up the express app - it's been stored in this constant now
const app = express();

// middleware - this is code that runs between getting a request and responding.
// middleware used to access data in the req object when eg: a patch req is sent, it checks if a request that comes in has a body(data) and attaches that data to the req object.
app.use(express.json());

// middleware used to log the type of request
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next() // this is used to proceed to the next piece of code
});

// routes - We need to not only listen to requests but also respond to requests
// when we fire a request to this route here(which is cutom set) then use the specified routes(workoutRoutes)
app.use('/api/workouts',workoutRoutes);

// listen for requests - we put the port number in an evironment variable so that it can remain hidden when i push the code to eg: github
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
});