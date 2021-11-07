// @desc Fetch all channels
// @route GET /channels
// @access private
function getChannels(req, res) {
  res.send("fetching Channels");
}

function sendMessageToChannel(req, res) {
  res.send("Posting a Message");
}

module.exports = {
  getChannels,
  sendMessageToChannel,
};
