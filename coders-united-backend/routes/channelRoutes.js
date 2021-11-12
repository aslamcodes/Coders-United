const express = require("express");
const {
  getChannels,
  sendMessageToChannel,
} = require("../controllers/channelControllers");
const { sendEmbedToChannel } = require("../controllers/embedControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getChannels).post(protect, sendMessageToChannel);
router.route("/embed").post(protect, sendEmbedToChannel);

module.exports = {
  channelRouter: router,
};
