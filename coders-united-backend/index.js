const startBot = require("./config/bot-config.js");
require("dotenv").config();
const Bot_Token = process.env.TOKEN;

startBot(Bot_Token);
