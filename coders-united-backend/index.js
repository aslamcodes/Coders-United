require("dotenv").config();
const { config_bot, client } = require("./config/bot-config.js");
const express = require("express");

const Bot_Token = process.env.TOKEN;

config_bot(Bot_Token);
const app = express();

app.get("/", (req, res) => {
  res.send("Api Runs...");
});

app.listen(process.env.PORT || 5050, () => {
  console.log(
    `Server Listening at ${process.env.PORT || 5050} on ${
      process.env.NODE_ENV
    } mode`
  );
});
