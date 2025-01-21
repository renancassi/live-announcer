const { SlashCommandBuilder, SlashCommandStringOption, EmbedBuilder } = require("discord.js");

/* command description */
const commandName = "announce";
const commandDescription = "Use this command to mannualy announce a livestream on this channel!";

/* parameters create */
const commandURLInput = new SlashCommandStringOption();
commandURLInput.setName("livestream-url");
commandURLInput.setDescription("The URL that leads for your livestream");
commandURLInput.setRequired(true);

const commandPlatformOptions = new SlashCommandStringOption();
commandPlatformOptions.setName("livestream-platform");
commandPlatformOptions.setDescription("The platform where you are going to make the livestream");
commandPlatformOptions.setRequired(true);
commandPlatformOptions.addChoices(
  { name: "Twitch", value: "platform-twitch" },
  { name: "Youtube", value: "platform-youtube" },
  { name: "Facebook", value: "platform-facebook" }
);

/* function body */
const announceCommand = async (interaction) => {
  const announceEmbed = new EmbedBuilder()
    .setTitle("Livestream Começando!")
    .setURL(interaction.options.getString("livestream-url"));

  const channel = interaction.channel;

  channel.send({ embeds: [announceEmbed] });
};

/* function body */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription(commandDescription)
    .addStringOption(commandURLInput)
    .addStringOption(commandPlatformOptions),
  async execute(interaction) {
    announceCommand(interaction);
  },
};
