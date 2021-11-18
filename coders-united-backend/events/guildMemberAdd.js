const Discord = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(interaction) {
    const welcomeEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Welcome to the Coders United Discord!")
      .setDescription("Have a great time here!");
    const channel = await interaction.guild.channels.cache.get(
      "910011714580398123"
    );
    channel.sendTyping();
    await channel.send({
      content: `Welcome <@${interaction.user.id}>`,
      embeds: [welcomeEmbed],
    });
  },
};
