const fs = require("fs");

const Channel = require("../models/Channel");
const asyncHandler = require("express-async-handler");
// @desc Fetch all channels
// @route GET /channels
// @access private
const getChannels = asyncHandler(async (req, res) => {
  const channels = await Channel.find({});
  res.json(channels);
});

// @desc Send a message to a channel
// @route POST /channels
// @access private
// @param message:string, channelId:string
const sendMessageToChannel = asyncHandler(async (req, res) => {
  const { message, channelId } = req.body;
  const client = require("..");
  const channel = client.channels.cache.get(channelId);
  channel.send(message);
  res.send("Posting a Message");
});

// @desc Upload a file to a channel
// @route POST /file-upload
// @access private
// @param messageObject:{message, file}, channelId:string
const uploadFileToChannel = asyncHandler(async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  const { message, channelId } = req.body;

  file.mv(`./coders-united-backend/data/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const client = require("..");
    const channel = client.channels.cache.get(channelId);
    channel.send({
      content: message,
      files: [`./coders-united-backend/data/uploads/${file.name}`],
    });
    res.json({ fileName: file.name });
  });
});

// @desc Send a menu for users to pick roles
// @route POST /role-menu
// @access private
// @param
const sendRoleSelectMenu = asyncHandler(async (req, res) => {});

module.exports = {
  getChannels,
  sendMessageToChannel,
  uploadFileToChannel,
  sendRoleSelectMenu,
};
