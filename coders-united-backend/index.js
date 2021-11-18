require("dotenv").config();
require("colors");
const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const { config_bot } = require("./config/bot-config");
const { Client, Intents } = require("discord.js");
const { channelRouter } = require("./routes/channelRoutes");
const { userRouter } = require("./routes/userRoutes");
const { config_db } = require("./config/db-config");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

const Bot_Token = process.env.TOKEN;
const DB_URI = process.env.MONGO_URI;

config_bot(Bot_Token, client);
config_db(DB_URI);

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(fileUpload());
app.use("/channels", channelRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/home.html"));
});

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server Listening at ${process.env.PORT || 3001} on ${
      process.env.NODE_ENV
    } mode`.black.bgWhite.bold
  );
});

module.exports = client;
