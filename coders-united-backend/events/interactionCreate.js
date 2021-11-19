const client = require("../index.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    );

    if (interaction.isSelectMenu) {
      if (interaction.customId === "select_roles_dept") {
        const { member, values } = interaction;

        // Get the selected role
        const selectedRole = interaction.guild.roles.cache.find(
          (role) => role.id === values[0]
        );

        // Get the non selected roles
        const options = interaction.message.components
          .find((c) => c.type === "ACTION_ROW")
          .components.find((c) => c.customId === "select_roles_dept")
          .options.filter((option) => option.value !== values[0].id);

        // Remove the other roles that the user already has
        options.forEach((option) => {
          member.roles.remove(
            interaction.guild.roles.cache.find(
              (role) => role.id === option.value
            )
          );
        });

        member.roles.add(selectedRole);
      }

      return;
    }
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: `There was an error while executing this command!`.red,
        ephemeral: true,
      });
    }
  },
};
