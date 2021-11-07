const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1y",
  });
  return token;
};

module.exports = {
  generateToken,
};
