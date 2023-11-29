const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  // console.log(req.body);
  const usersModel = mongoose.model("Users");

  const { email, username, password, confirmPW } = req.body;

  // Validations\
  if (!username) throw "No name";
  if (!password) throw "No password";
  if (password !== confirmPW) throw "Passwords do not match";
  if (password.length < 5) throw "Password too short";

  const getDupEmail = await usersModel.findOne({ email });
  if (getDupEmail) return res.status(400).send("This Email Exists");

  const hashedPW = await bcrypt.hash(password, 6);

  const createdUser = await usersModel.create({
    username,
    email,
    password: hashedPW,
  });

  res.status(201).json({
    status: "success on register",
    user: {
      id: createdUser._id,
      username: createdUser.username,
      email: createdUser.email,
    },
  });
};

module.exports = signup;
