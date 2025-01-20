const { SlashCommandBuilder } = require("discord.js");

const pingCommand = async (interaction) => {
  await interaction.reply("Pong?");
};

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("basic"),
  async execute(interaction) {
    pingCommand(interaction);
  },
};
