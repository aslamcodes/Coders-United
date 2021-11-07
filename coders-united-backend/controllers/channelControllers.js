const Channel = require("../models/Channel");
const asyncHandler = require("express-async-handler");
// @desc Fetch all channels
// @route GET /channels
// @access private
const getChannels = asyncHandler(async (req, res) => {
  const channels = await Channel.find({});
  res.json(channels);
});

// @desc Fetch all channels
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

module.exports = {
  getChannels,
  sendMessageToChannel,
};
