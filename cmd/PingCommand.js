const Discord = require('discord.js')
const Command = require('./Command');

module.exports = class Ping extends Command {
    label = "!ping";

    run = (message) => {
        const user = message.author;

        var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .addField("username", user.username, true)

            message.channel.send(embed);
    }
};