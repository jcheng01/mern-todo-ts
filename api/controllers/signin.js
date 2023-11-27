const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//we need to authenticate the logged in user and generate them a access key so they can access proteced routes and have the login persist
const jsonwebtoken = require("jsonwebtoken");

const signin = async (req, res) => {
  const usersModel = mongoose.model("Users");

  const { email, password } = req.body;

  const getUser = await usersModel.findOne({ email });
  if (!getUser) throw "Email does not exists";

  const comparePW = await bcrypt.compare(password, getUser.password);
  if (!comparePW) throw "Incorrect Password";

  const accessToken = await jsonwebtoken.sign(
    {
      id: getUser._id,
      name: getUser.name,
    },
    process.env.jwtKEY
  );

  res.status(200).json({
    status: "success",
    message: "User logged in",
    accessToken,
  });
};

module.exports = signin;
