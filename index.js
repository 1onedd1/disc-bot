const Discord = require('discord.js');
const bot = new Discord.Client();

const RegistryCommand = require('./cmd/RegistryCommand')
const InfoUser = require('./cmd/Infouser')
const Ping = require('./cmd/Ping')
const ReaderToken = require('./ReaderToken');

bot.on('ready', () => {
	console.log('Бот запустился', bot.user.tag)
    loadCommands();
});

const reg = new RegistryCommand();

function loadCommands() {
    reg.add(new InfoUser());
    reg.add(new Ping())
}

bot.on('message', message => {
    reg.get(message);
});

const reader = new ReaderToken();
reader.readTokenAndBotLogin(bot);
