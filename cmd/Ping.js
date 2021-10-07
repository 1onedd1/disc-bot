const Discord = require('discord.js')

module.exports = class Ping {
    label = "!ping";

    run = (message) => {
        const user = message.author;

        var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .addField("username", user.username, true)

            message.channel.send(embed);
    }
};