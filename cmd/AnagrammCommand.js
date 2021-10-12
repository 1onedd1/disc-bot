const Discord = require('discord.js');
const Command = require('./Command');
const AnagrammGame = require('../chat_game/AnagrammGame');

module.exports = class Anagramm extends Command {
    label = "!ang";
    channel = "anagramm";

    run = (message) => {
        let a = message.content.split(" ");
        
        if(a[1] == "start") {
            AnagrammGame.start();
            message.channel.send(AnagrammGame.provideShakedWord());
        }

        if(a[1] == "stop") {
            message.reply("game was stoped.");
            AnagrammGame.stop();
        }

        if(AnagrammGame.currentCorrectWord == message.content && AnagrammGame.isStart) {
            message.channel.send("you're right. ok. now a new word: ");

            AnagrammGame.currentCorrectWord = AnagrammGame.takeRandomWord();
            let shakeWord = AnagrammGame.shake(AnagrammGame.currentCorrectWord);
            message.channel.send(shakeWord);
        }
    }
};