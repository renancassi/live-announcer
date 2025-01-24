const {
  SlashCommandBuilder,
  SlashCommandStringOption,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle
} = require("discord.js");
  
const { getPlatform } = require("./src/getPlatform");

/* command description */
const commandName = "announce";
const commandDescription = "Use this command to mannualy announce a livestream on this channel!";

/* parameters create */
const commandURLInput = new SlashCommandStringOption();
commandURLInput.setName("livestream-url");
commandURLInput.setDescription("The URL that leads for your livestream");
commandURLInput.setRequired(true);

const validateURL = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`; // Adiciona https:// no início
  }
  return url;
};

/*
* function body
*/
const announceCommand = async (interaction) => {
  let liveURL = interaction.options.getString("livestream-url")
  liveURL = validateURL(liveURL);
  
  // Cria um botão com o link da live
  const urlButton = new ButtonBuilder()
  .setLabel(getPlatform(liveURL))
  .setStyle(ButtonStyle.Link)
  .setURL(liveURL)

  // Cria uma actionRow com o botão
  const actionRow = new ActionRowBuilder()
  .addComponents(urlButton);

  // Cria um embed
  const announceEmbed = new EmbedBuilder()
    .setTitle("🎥 Livestream Começando!")
    .setURL(liveURL);

  interaction.reply("Anúncio realizado!");

  const channel = interaction.channel;
  channel.send({
    embeds: [announceEmbed],
    components: [actionRow],
  });
};

/*
* function body
*/
module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription(commandDescription)
    .addStringOption(commandURLInput),
  async execute(interaction) {
    announceCommand(interaction);
  },
};

