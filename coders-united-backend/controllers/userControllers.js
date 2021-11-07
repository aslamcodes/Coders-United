const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/authorization");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc Register User
// @route POST /users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    if (user) {
      res.status(200).json({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  } catch (err) {
    throw new Error(err);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid User and Password");
  }
});
module.exports = {
  registerUser,
  loginUser,
};
