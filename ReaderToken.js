fs = require('fs');

module.exports = class ReaderToken {
    readToken(bot) {
        fs.readFile('./token.txt', (err, data) => {
            if (err) {
                return console.error(`Error on reading token.txt: ${err}`);
            }

            let token = data.toString();
            bot.login(token);
        });
    }
}