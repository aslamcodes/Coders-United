const { GUILD_TEXT } = require("../constants/channel_types.js");
const deploy_commands = require("../utils/depoy-commands.js");

module.exports = {
  name: "guildCreate",
  async execute(interaction) {
    deploy_commands(interaction.id);
    interaction.channels.cache
      .filter((channel) => channel.type === GUILD_TEXT)
      .each((channel) => {
        console.log(channel);
      });
  },
};
