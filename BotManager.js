const CommandManager = require('./cmd/CommandManager')

module.exports = class BotManager {
    registerEvents(bot) {
        bot.on('ready', () => {
            console.log('Бот запустился', bot.user.tag)
        });
        
        bot.on('message', message => {
            const reg = new CommandManager();
        
            reg.get(message);
        });
    }
}

