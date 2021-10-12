const Discord = require('discord.js');
const Command = require('./Command');

module.exports = class Help extends Command {
    label = "!help";

    run = (message) => {
        message.channel.send(
            "1. !info - Information about User\n" + 
            "2. !rand <x> - Random of value; <0 to x>\n" +
            "3. !ping - test command"
        );
    }
};