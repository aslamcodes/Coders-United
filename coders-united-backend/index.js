require("dotenv").config();
require("colors");
const path = require("path");
const express = require("express");
const { config_bot } = require("./config/bot-config");
const { Client, Intents } = require("discord.js");
const { channelRouter } = require("./routes/channelRoutes");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const Bot_Token = process.env.TOKEN;

config_bot(Bot_Token, client);

const app = express();
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/home.html"));
});

app.use("/channels", channelRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server Listening at ${process.env.PORT || 3001} on ${
      process.env.NODE_ENV
    } mode`.black.bgWhite.bold
  );
});

module.exports = client;
