const Discord = require('discord.js')

module.exports = class Anagramm {
    static words = Array.of("");
    static currentCorrectWord = "";
    static currentShakedWord = "";
    static hasAnswer = false;
    static isStart = false;

    static start() {
        this.isStart = true;
        this.currentCorrectWord = this.takeRandomWord();
        this.currentShakedWord = this.shake(this.currentCorrectWord);
    }

    static stop() {
        this.isStart = false;
    }

    static giveAnswer(answer) {
        if(answer == this.currentCorrectWord) this.hasAnswer = true;
    }

    static provideShakedWord() {
        return this.currentShakedWord;
    }

    static takeRandomWord() {
        var random = Math.round(Math.random() * this.words.length);

        if(random == this.words.length) random = random - 1;

        return this.words[random];
    }

    static shake(word) {
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

    static getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    static setWords(words) {
        this.words = words;
    }
} 