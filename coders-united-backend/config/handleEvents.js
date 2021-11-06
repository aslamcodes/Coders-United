const fs = require("fs");
const path = require("path");
const eventDirPath = path.resolve(__dirname, "../events");

// Event Handling
function handleEvents(client) {
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
  console.log("Events Ready!");
}
module.exports = handleEvents;
