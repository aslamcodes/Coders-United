const fs = require("fs");
const path = require("path");
const { Client, Collection, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commandDirPath = path.resolve(__dirname, "../commands");
const eventDirPath = path.resolve(__dirname, "../events");

function config_bot(token) {
  client.commands = new Collection();
  // Command Handling
  fs.readdirSync(commandDirPath)
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const command = require(`../commands/${file}`);
      client.commands.set(command.data.name, command);
    });

  // TODO: Make this command handler more dynamic
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });

  // Event Handling
  fs.readdirSync(eventDirPath)
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const event = require(`../events/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
    });

  client.login(token);
}

module.exports = config_bot;
