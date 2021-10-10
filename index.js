const Discord = require('discord.js');
const ReaderToken = require("./ReaderToken")
const CommandManager = require('./cmd/CommandManager');
const BotManager = require('./BotManager');
const Anagramm = require('./chat_game/Anagramm');

const bot = new Discord.Client();
const rt = new ReaderToken();
const cm = new CommandManager()
const bm = new BotManager()
const agm = new Anagramm();

init();

function init() {
    var token = rt.readToken();

    bm.registerEvents(bot);

    bot.login(token);
}


