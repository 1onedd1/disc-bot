const Command = require('../cmd/Command');
const Discord = require('discord.js')


module.exports = class Anagramm extends Command {
    words = Array.of("");
    channel = "anagramm";
    currentWord = "";

    constructor(words) {
        super();
        this.words = words;
        this.currentWord = this.takeRandomWord();
    }

    takeRandomWord() {
        var random = Math.round(Math.random() * this.words.length);

        if(random == this.words.length) random = random - 1;

        return this.words[random];
    }

    run = (message) => {
        if(this.currentWord == message.content) {
            message.channel.send("you're right. ok. now a new word: ");

            this.currentWord = this.takeRandomWord();
            let shakeWord = this.shake(this.currentWord);
            message.channel.send(shakeWord);
        }
    }

    shake(word) {
        var result = "";
        
        if((typeof word) === "string") {
            var charWordArray = Array.from(word);

            for(var i = 0; i < word.length; i++) {
                var randomPosition = Math.round(this.getRandomArbitrary(i, word.length - 1));

                var tempChar = charWordArray[i];
                charWordArray[i] = charWordArray[randomPosition];
                charWordArray[randomPosition] = tempChar;
            }
            
            result = charWordArray.join(""); 
        }

        return result;
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
} 