const { client } = require("../config/bot-config.js");
const deploy_commands = require("../utils/depoy-commands.js");

module.exports = {
  name: "guildCreate",
  async execute(interaction) {
    deploy_commands(interaction.id);
  },
};
