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
  intents: Object.values(Intents.FLAGS),
});
const Bot_Token = process.env.TOKEN;
const DB_URI = process.env.MONGO_URI;

config_bot(Bot_Token, client);
config_db(DB_URI);

const app = express();

app.use(express.json());
app.use(fileUpload());

app.use("/channels", channelRouter);
app.use("/users", userRouter);
if (process.env.NODE_ENV === "DEVELOPMENT") {
  console.log("Development mode".green);
  app.use(express.static(path.resolve(__dirname, "./public")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/home.html"));
  });
} else {
  console.log("Production mode".green);
  app.use(
    express.static(path.resolve(__dirname, "../coders-united-interface/build"))
  );
  app.get("*", (req, res) => {
    console.log(
      path.resolve(__dirname, "../coders-united-interface/build/index.html")
    );
    res.sendFile(
      path.resolve(__dirname, "../coders-united-interface/build/index.html")
    );
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server Listening at ${process.env.PORT || 5000} on ${
      process.env.NODE_ENV
    } mode`.black.bgWhite.bold
  );
});

module.exports = client;
