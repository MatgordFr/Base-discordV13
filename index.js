const config = require("./config.json");
const { Client, Collection } = require("discord.js");
const discord = require("discord.js")
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const chalk = require("chalk");
const client = new Client({ intents: 32767, });
const fs = require("fs");


module.exports = client;

client.commands = new discord.Collection();
client.slashCommands = new Collection();
client.login(config.token);


let folders = fs.readdirSync("./commands/");
folders.forEach((dir) => {
  const commandFiles = fs
    .readdirSync(`./commands/${dir}/`)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${dir}/${file}`);
    client.commands.set(command.name, command);
    console.log("%c| ⚙️ | " + command.name + " charger avec succès.",'color :#009933')
  }
});


let eventFolder = fs.readdirSync("./events");
eventFolder.forEach((dir) => {
  const eventFiles = fs
    .readdirSync(`./events/`)
    .filter((file) => file.endsWith(".js"));

  for (const file of eventFiles) {
    const Event = require(`./events/${file}`);
    const eventNames = file.split(".")[0];
    console.log("%c| 〽️ | " + eventNames + " chargement réussi.",'color : #e6e600')
  }
});


//MatgordFR//