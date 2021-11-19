const express = require("express");
const {
  getRoles,
  getChannels,
  sendMessageToChannel,
  uploadFileToChannel,
  sendRoleSelectMenu,
} = require("../controllers/channelControllers");
const { sendEmbedToChannel } = require("../controllers/embedControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getChannels).post(protect, sendMessageToChannel);
router.route("/embed").post(protect, sendEmbedToChannel);
router.route("/file-upload").post(protect, uploadFileToChannel);
router
  .route("/role-menu")
  .get(protect, getRoles)
  .post(protect, sendRoleSelectMenu);
module.exports = {
  channelRouter: router,
};
