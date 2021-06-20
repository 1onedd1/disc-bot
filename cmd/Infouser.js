const Discord = require('discord.js')

module.exports = class Infouser {
    label = "!info";

    run = (message) => {
        const user = message.author;
        const member = message.guild.member(user);
        
        var roles = "";

        member.roles.cache.array().forEach(r => {
            if(r.name == "@everyone") return;
            roles += r.name + " ";
        })

        var embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .addField("username", user.username, true)
            .addField("roles", roles, true);

        message.channel.send(embed);
    }
};