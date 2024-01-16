# Things done:
## Day 1
  1.created the server.js file - this is the entry point of the application where we'll register the express app
  2.(npm init -y) -> created a package.json file in the backend folder. Package.json file will allow us to keep track of 
    our dependencies and also to register our own custom scripts.
  3.(npm install express) -> installed the express package. To use it to create an express app.
  4.(node server.js) -> To run a file eg: server.js
  5.(npm install -g nodemon) -> install nodemon package globally. Nodemon watches & reruns the file without having to run
    (node server.js) again
  6.(nodemon server.js) To run the file using nodemon <- However this was giving an error
  7.Go to package.json file & add this script -> "dev":"nodemon server.js" inside scripts.
  8.(npm run dev) -> To run the server.js file.
  9.Created the .env file -> This file will be used to store the environment variables eg: the PORT number.
  10.(npm install dotenv) -> Package that loads environment variables from a .env file into a process.env object.

## Day 2:
  1.Created workouts.js file -> to put the routes in it to help to avoid bloating out the server.js file and export them
    (use express router).
  2.express.Router -> used to create an instance of the router
  3.specified the path for which to use for the specified routes. -> /api/workouts.
  4.express.json -> middleware used to check if a request contains data and attach the data to req object if it does.

## Day 3
  1.Mongo db atlas -> allows us to spin up a fully configured database online.
  2.(npm install mongoose) -> an ODM(Object Data Modelling) library, wraps mongodb with an extra layer that allows us to use methods to read and write database docs and also to declare modules & schemas to ensure a more strict data structure.
  3.we don't want to start listening to requests before connecting to the database, so in server.js, move the fn for listening to requests inside the fn for connecting to the db using mongoose.


  1.made a schema for how the workout data should look like and exported the module. The module is used to manipulate the collection.
  2.updated the post request handler in workouts.js

  ## Day 4
  1.created workoutController.js file for the controller fns(for each of the different routes) to avoid bloating out workout.js file(which is only for registering the different routes)

  ## Day 5
  1.Created two controller functions(for delete & update routes)

  1.created a react app for the frontend
  2.(npm install react-router-dom) -> so that we can add pages to the application.
  3.created Home.js and Navbar.js components
  
