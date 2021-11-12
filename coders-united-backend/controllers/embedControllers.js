const { MessageEmbed } = require("discord.js");
const asyncHandler = require("express-async-handler");

// @desc Send an embed to a channel by ID
// @route POST /channels
// @access private
// @param embed:object, channelId:string
const sendEmbedToChannel = asyncHandler(async (req, res) => {
  const {  channelId, embed } = req.body;
  const client = require("..");
  const channel = client.channels.cache.get(channelId);

  const Embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(embed.title)
    .setURL(embed.url)
    .setAuthor(
      embed.authorName,
      "https://i.imgur.com/AfFp7pu.png",
      embed.authorUrl
    )
    .setDescription(embed.description)
    .setThumbnail("https://i.imgur.com/AfFp7pu.png")
    .addFields(
      { name: "Regular field title", value: "Some value here" },
      { name: "\u200B", value: "\u200B" },
      { name: "Inline field title", value: "Some value here", inline: true },
      { name: "Inline field title", value: "Some value here", inline: true }
    )
    .addField("Inline field title", "Some value here", true)
    .setImage("https://i.imgur.com/AfFp7pu.png")
    .setTimestamp()
    .setFooter("Some footer text here", "https://i.imgur.com/AfFp7pu.png");
  try {
    await channel.send({ embeds: [Embed] });
  } catch (error) {
    throw new Error(error);
  }

  res.send("Message Sent");
});

module.exports = {
  sendEmbedToChannel,
};
