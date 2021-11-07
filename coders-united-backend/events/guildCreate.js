const { GUILD_TEXT } = require("../constants/channel_types.js");
const deploy_commands = require("../utils/depoy-commands.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "guildCreate",
  async execute(interaction) {
    deploy_commands(interaction.id);
    fs.writeFileSync(
      path.resolve(__dirname, "../data/channels.json"),
      JSON.stringify({
        "Text Channels": interaction.channels.cache.filter(
          (channel) => channel.type === GUILD_TEXT
        ),
      })
    );
  },
};
