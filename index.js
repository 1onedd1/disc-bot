const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.on('ready', () => {
	console.log('Бот запустился', bot.user.tag)
});

bot.on('message', message => {
    if(message.content != '!ping') return;

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
});

fs.readFile('./token.txt', (err, data) => {
	if (err) {
		return console.error(`Error on reading token.txt: ${err}`);
	}
	let token = data.toString();
	bot.login(token);
});