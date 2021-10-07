const fs = require('fs');

module.exports = class ReaderToken {
    readToken() {
        let content = fs.readFileSync('./resources/token.txt', 'utf8');

        return content;
    }
}