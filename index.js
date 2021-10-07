const Discord = require('discord.js');
const ReaderToken = require("./ReaderToken")
const CommandManager = require('./cmd/CommandManager');
const BotManager = require('./BotManager');

const bot = new Discord.Client();
const rt = new ReaderToken();
const cm = new CommandManager()
const bm = new BotManager()

init();

function init() {
    var token = rt.readToken();
    
    bm.registerEvents(bot);

    bot.login(token);
}


