const bcrypt = require("bcryptjs");

module.exports = [
  {
    id: 1,
    name: "Aslam",
    isAdmin: true,
    email: "aslam@cu.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    id: 2,
    name: "Jayvan",
    isAdmin: true,
    email: "jayvan@cu.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
