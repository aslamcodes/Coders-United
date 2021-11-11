// @desc Send an embed to a channel by ID
// @route POST /channels
// @access private
// @param embed:object, channelId:string
const sendEmbedToChannel = asyncHandler(async (req, res) => {
  const { message, channelId } = req.body;
  const client = require("..");
  const channel = client.channels.cache.get(channelId);
  channel.send(message);
  res.send("Posting a Message");
});
