const { Client, Collection, Intents } = require("discord.js");
const handleEvents = require("./handleEvents");
const handleCommands = require("./handleCommands");

const client = new Client({ intents: ["GUILDS"] });

function config_bot(token) {
  client.commands = new Collection();

  handleCommands(client);
  handleEvents(client);
  client.login(token);
}

module.exports = { config_bot, client };
