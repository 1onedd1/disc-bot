const Discord = require('discord.js')

module.exports = class RandValue {
    label = "!rand";

    run = (message) => {
        var embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .addField("user", message.author, false)
            .addField("value", Math.floor(Math.random() * 20), true)

            message.channel.send(embed);
    }
};