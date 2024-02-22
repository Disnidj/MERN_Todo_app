//import express to invoke with the app
const express = require("express");

// import cors to disable the cors policy error
const cors = require("cors");

//import body-paser to convert json format data in to server objects
const bodyParser = require("body-parser");

//import mongoose
const mongoose = require("mongoose");


//invoke app
const app = express();

// Configure CORS middleware
app.use(cors({
  origin: ["http://localhost:1234", "http://localhost:8000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));


// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Received request body:', req.body);
  next();
});

// Import and use your router
const router = require('./Routes/TodoList');

//route middleware
app.use(router);


// Configure dotenv
const dotenv = require("dotenv");
dotenv.config();



//connect the app with mongo db with mongoose
mongoose
  .connect(process.env.DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));



//declare the port to run the backend
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});
