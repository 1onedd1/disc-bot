const Discord = require('discord.js')

module.exports = class RandValue {
    label = "!rand";

    run = (message) => {
        var embed;

        if(message.content === "!rand") {
            embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .addField("user", message.author, false)
                .addField("value", Math.floor(Math.random() * 20), true)
        } else {
            var arrayMessage = message.content.split(" ");

            embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .addField("user", message.author, false)
                .addField("value", Math.floor(Math.random() * parseInt(arrayMessage[1])), true)
        }

        message.channel.send(embed);
    }
};