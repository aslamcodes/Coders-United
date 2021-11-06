const fs = require("fs");
const path = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

require("dotenv").config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const commandsDirPath = path.resolve(__dirname, "../commands");

function deploy_commands(guildId) {
  const commandFiles = fs
    .readdirSync(commandsDirPath)
    .filter((file) => file.endsWith(".js"));

  const commands = commandFiles.map((file) =>
    require(`${commandsDirPath}/${file}`).data.toJSON()
  );

  const rest = new REST({ version: "9" }).setToken(token);

  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() =>
      console.log(`Successfully registered application commands.`.yellow)
    )
    .catch(console.error);
}

module.exports = deploy_commands;
