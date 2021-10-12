const fs = require('fs');

module.exports = class Reader {
    read(path) {
        let content = fs.readFileSync(path, 'utf8');

        return content;
    }
}