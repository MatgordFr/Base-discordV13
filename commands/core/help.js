const { Message, Client } = require("discord.js")
const discord = require('discord.js')
const moment = require('moment')


module.exports = {
    name: "help",
    run: async (client, message, args) => {
            
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');

            const UserEmbed = new discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle(`Help commande`)
                    .setDescription(`Page d'aide pour : ( NOM DE TON BOT ) \nLe préfixe est : ( PREFIX DE TON BOT )`)
                    .addField('Infos',infos)
                    .setFooter(`By Matgordfr`)
                    .setTimestamp(new Date())
            message.channel.send({ embeds: [UserEmbed] }) 
        }
    },
};

//MatgordFR//