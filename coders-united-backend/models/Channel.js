const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
});

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
