const { MessageEmbed } = require("discord.js");
const asyncHandler = require("express-async-handler");

// @desc Send an embed to a channel by ID
// @route POST /channels
// @access private
// @param embed:object, channelId:string
const sendEmbedToChannel = asyncHandler(async (req, res) => {
  const { channelId, embed } = req.body;
  const embedData = JSON.parse(embed);
  const file = req.files.file;
  try {
    const client = require("..");
    const channel = client.channels.cache.get(channelId);

    file.mv(`./coders-united-backend/data/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
    const Embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(embedData.title)
      .setURL(embedData.url)
      .setThumbnail(`attachment://${file.name}`)
      .setAuthor(embedData.authorName)
      .setDescription(embedData.description);

    await channel.send({
      embeds: [Embed],
      files: [
        {
          attachment: `./coders-united-backend/data/uploads/${file.name}`,
          name: file.name,
        },
      ],
    });
  } catch (error) {
    throw new Error(error);
  }

  res.send("Message Sent");
});

module.exports = {
  sendEmbedToChannel,
};
