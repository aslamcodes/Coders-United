const express = require("express");
const {
  getChannels,
  sendMessageToChannel,
} = require("../controllers/channelControllers");

const router = express.Router();

router.route("/").get(getChannels).post(sendMessageToChannel);

module.exports = {
  channelRouter: router,
};
