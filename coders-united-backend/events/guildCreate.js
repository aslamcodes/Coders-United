const { client } = require("../config/bot-config.js");

module.exports = {
  name: "guildCreate",
  async execute(interaction) {
    console.log("New Server Subscribed");
  },
};
