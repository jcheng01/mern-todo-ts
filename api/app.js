require("express-async-errors");

const express = require("express");
const errorHandler = require("./handlers/errorHandler"); //act as a middleware, needs to be called later
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes");

require("dotenv").config(); //loads environment variables

const app = express();

mongoose
  .connect(process.env.mongo, {}) //initializes the connection to your MongoDB
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed", error);
  });

//models
require("./models/users.models");

app.use(express.json());

//routes
app.use("/api/users", userRoutes);

app.use(errorHandler); //error handling middleware

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
