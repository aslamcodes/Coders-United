const Channel = require("../models/Channel");
const asyncHandler = require("express-async-handler");
const client = require("..");
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
function sendMessageToChannel(req, res) {
  const { message, channelId } = req.body;
  console.log(message, channelId);

  res.send("Posting a Message");
}

module.exports = {
  getChannels,
  sendMessageToChannel,
};
