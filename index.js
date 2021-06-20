const RegistryCommand = require('./RegistryCommand')
const InfoUser = require('./cmd/Infouser')

const Discord = require('discord.js');
const bot = new Discord.Client();
const ReaderToken = require('./ReaderToken');

bot.on('ready', () => {
	console.log('Бот запустился', bot.user.tag)
    loadCommands();
});

const reg = new RegistryCommand();

function loadCommands() {
    reg.add(new InfoUser());
}

bot.on('message', message => {
    reg.get(message);
});

const reader = new ReaderToken();
reader.readToken(bot);
