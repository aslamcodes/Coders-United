const Discord = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(interaction) {
    if (interaction.user.bot) return;
    const welcomeEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Welcome to the Coders United Discord!")
      .setDescription("Have a great time here!")
      .setThumbnail(`attachment://logo.png`)
      .setImage(interaction.user.displayAvatarURL());

    const channel = await interaction.guild.channels.cache.get(
      "847768755286966292"
    );
    channel.sendTyping();
    await channel.send({
      content: `Welcome <@${interaction.user.id}>`,
      embeds: [welcomeEmbed],
      files: [
        {
          attachment: `./coders-united-backend/data/uploads/logo.png`,
          name: "logo.png",
        },
      ],
    });
  },
};
