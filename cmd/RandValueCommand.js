const Discord = require('discord.js');
const Command = require('./Command');

module.exports = class RandValue extends Command {
    label = "!rand";

    run = (message) => {
        var embed;

        if(message.content === "!rand") {
            embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .addField("user", message.author, false)
                .addField("value", Math.floor(Math.random() * 100), true)
        } else {
            var arrayMessage = message.content.split(" ");
            var value = parseInt(arrayMessage[1]);

            embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .addField("user", message.author, false)
                .addField("value", Math.floor(Math.random() * value), true)
        }

        message.channel.send(embed);
    }
};