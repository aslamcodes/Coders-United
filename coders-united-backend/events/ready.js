module.exports = {
  name: "ready",
  once: true,
  async execute(interaction) {
    console.log(`Bot Ready and Listening!`.bgGreen.black + `✅`);
  },
};
