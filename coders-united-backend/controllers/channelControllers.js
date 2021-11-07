const channels = require("../data/db.json");

// @desc Fetch all channels
// @route GET /channels
// @access private
function getChannels(req, res) {
  res.json(channels);
}

// @desc Fetch all channels
// @route POST /channels
// @access private
// @param message:string, channelId:string
function sendMessageToChannel(req, res) {
  res.send("Posting a Message");
}

module.exports = {
  getChannels,
  sendMessageToChannel,
};
