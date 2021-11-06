const fs = require("fs");
const path = require("path");
const commandDirPath = path.resolve(__dirname, "../commands");

function handleCommands(client) {
  fs.readdirSync(commandDirPath)
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const command = require(`../commands/${file}`);
      client.commands.set(command.data.name, command);
    });

  console.log(`Commands Ready! ✅`.yellow);
}

module.exports = handleCommands;
