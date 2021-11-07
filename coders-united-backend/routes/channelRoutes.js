const express = require("express");
const {
  getChannels,
  sendMessageToChannel,
} = require("../controllers/channelControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getChannels).post(protect, sendMessageToChannel);

module.exports = {
  channelRouter: router,
};
