const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("sayhi").setDescription("Hii!"),
  async execute(interaction) {
    await interaction.reply(`Hey! ${interaction.user.username}`);
  },
};
