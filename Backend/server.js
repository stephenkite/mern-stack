// This is the entry file for the application where we are going to register the express app

// require the dotenv package, invoke the config method on it which will attach the environment variables to the process.env object
require('dotenv').config();

// creating the express application - i is found in the node modules folder
const express = require('express');

// starting up the express app - it's been stored in this constant now
const app = express();

// middleware - this is code tha runs between getting a request and respondig -> we'll use it to log the type of request
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next() // this is used to proceed to the next piece of code
});

// routes - We need to not only listen to requests but also respond to requests
app.get('/', (req, res) => {
  res.json({mssg: 'welcome to the app'}) // a property called message
});

// listen for requests - we put the port number in an evironment variable so that it can remain hidden when i push the code to eg: github
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
});