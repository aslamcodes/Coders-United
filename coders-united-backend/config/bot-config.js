const { Collection } = require("discord.js");
const colors = require("colors");
const handleEvents = require("./handleEvents");
const handleCommands = require("./handleCommands");

function config_bot(token, client) {
  client.commands = new Collection();
  handleCommands(client);
  handleEvents(client);
  client.login(token);
}

module.exports = { config_bot };
