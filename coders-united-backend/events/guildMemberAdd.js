const Discord = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(interaction) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(
        `Welcome ${interaction.user.username}#${interaction.user.discriminator}`
      )
      .setDescription("Have a great time here!");

    interaction.guild.channels.cache
      .get("859384213349728291")
      .send({ embeds: [exampleEmbed] });
  },
};
