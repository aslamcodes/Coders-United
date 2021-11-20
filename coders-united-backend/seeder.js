require("dotenv").config();
const { config_db } = require("./config/db-config");
const users = require("./data/users");
const User = require("./models/User");

config_db(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log(`Data Seeded!`.green.inverse);
    process.exit(0);
  } catch (error) {
    console.log("Data Not Seeded!".red.inverse);
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log(`Data Deleted`.red.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`Data Deletion Error`.red.bold);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  seedData();
}
