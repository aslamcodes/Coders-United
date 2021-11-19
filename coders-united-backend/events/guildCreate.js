const fs = require("fs");
const path = require("path");

const Channel = require("../models/Channel.js");
const Role = require("../models/Roles.js");

const { GUILD_TEXT } = require("../constants/channel_types.js");
const { channel } = require("diagnostics_channel");
const deploy_commands = require("../utils/depoy-commands.js");

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

    const roles = interaction.roles.cache
      .filter(
        (role) => role.name !== "@everyone" && !role.deleted && !role.managed
      )
      .map((role) => ({
        id: role.id,
        name: role.name,
        color: role.color,
      }));
    await Role.deleteMany();
    await Role.insertMany(roles);

    await Channel.deleteMany();
    await Channel.insertMany(channels);
  },
};
