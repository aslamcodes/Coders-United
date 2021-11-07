const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

export const protect = asyncHandler(async (req, res, next) => {
  const bearer_token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(bearer_token, process.env.JWT_TOKEN_SECRET);
    req.body.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(404);
    console.log(err);
    throw new Error("Not Authorized");
  }
});

module.exports = {
  protect,
};
