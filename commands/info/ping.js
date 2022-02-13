const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "ping",
  category: "Infos",
  description: "le statut de ping du bots",
  emoji: "🏓",

  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setColor("#ff0000")
      .setTitle("🏓 Ping pong!")
      .setDescription(`PING: ${client.ws.ping}`);

    message.channel.send({ embeds: [embed] });
  },
};


//MatgordFR//