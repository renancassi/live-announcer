const fs = require("node:fs");
const path = require("node:path");

const { REST, Routes } = require("discord.js");
const { TOKEN, CLIENTID } = require("./config.json");

const commands = [];
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFileList = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

  for (const file of commandFileList) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
    } else {
      console.warn(
        `[WARN] - the command at ${filePath} is missing a required "data" or "execute" property`
      );
    }
  }
}

const rest = new REST().setToken(TOKEN);

(async () => {
  try {
    console.log(`[LOG] - started refreshing ${commands.length} application (/) commands`);

    const data = await rest.put(Routes.applicationCommands(CLIENTID), { body: commands });

    console.log(`[LOG] - successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
