const express = require("express");
const signup = require("../controllers/signup");
const signin = require("../controllers/signin");
const auth = require("../handlers/authHandler");

const userRoutes = express.Router();

//Routess..
userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);

userRoutes.use(auth); // authentification middleware

// protected routes

module.exports = userRoutes;
