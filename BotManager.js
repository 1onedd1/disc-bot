const CommandManager = require('./cmd/CommandManager')

module.exports = class BotManager {
    commandManager = {};

    registerEvents(bot) {
        bot.on('ready', () => {
            console.log('Бот запустился', bot.user.tag)
        });
        
        bot.on('message', message => {
            this.commandManager.get(message);
        });
    }

    provideCommandManager(commandManager) {
        this.commandManager = commandManager;
    }
}

