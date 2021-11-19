const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  color: {
    type: Number,
  },
});

const Role = mongoose.model("Role", rolesSchema);

module.exports = Role;
