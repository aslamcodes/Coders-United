const { GUILD_TEXT } = require("../constants/channel_types.js");
const deploy_commands = require("../utils/depoy-commands.js");
const fs = require("fs");
const path = require("path");
const Channel = require("../models/Channel.js");
const { channel } = require("diagnostics_channel");

module.exports = {
  name: "guildCreate",
  async execute(interaction) {
    deploy_commands(interaction.id);

    const channels = interaction.channels.cache
      .filter((channel) => channel.type === GUILD_TEXT)
      .map((channel) => {
        return {
          type: channel.type,
          name: channel.name,
          id: channel.id,
          guildId: channel.guildId,
        };
      });

    await Channel.insertMany(channels);
  },
};
