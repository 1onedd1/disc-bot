fs = require('fs');

module.exports = class ReaderToken {
    readTokenAndBotLogin(bot) {
        fs.readFile('./resources/token.txt', (err, data) => {
            if (err) {
                return console.error(`Error on reading token.txt: ${err}`);
            }

            let token = data.toString();
            bot.login(token)
        });
    }
}