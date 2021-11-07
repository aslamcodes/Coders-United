const mongoose = require("mongoose");
const colors = require("colors");

async function connectDB(URI) {
  try {
    const connect = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Connected to Database`.green.bold);
  } catch (err) {
    console.log(`Error ${err}`.red.bold);
    process.exit(1);
  }
}

module.exports = { config_db: connectDB };
