const Discord = require('discord.js');
const Reader = require("./Reader")
const CommandManager = require('./cmd/CommandManager');
const BotManager = require('./BotManager');
const Anagramm = require('./chat_game/AnagrammGame');

const bot = new Discord.Client();
const rt = new Reader();
const cm = new CommandManager()
const bm = new BotManager()

init();

function init() {
    var token = rt.read('./resources/token.txt');
    var words_Anagramm = rt.read('./resources/chat_game/anagramm/words.json');

    var object_words = JSON.parse(words_Anagramm);
    Anagramm.setWords(object_words['words']);
    bm.provideCommandManager(cm);
    bm.registerEvents(bot);

    bot.login(token);
}


