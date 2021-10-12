const InfoUser = require('./InfoUserCommand')
const Ping = require('./PingCommand')
const RandValue = require("./RandValueCommand")
const Help = require("./HelpCommand")
const AnagrammCommand = require('./AnagrammCommand');

module.exports = class CommandManager{
    _registry = new Array();

    constructor() {
        this._registry.push(new Help());
        this._registry.push(new InfoUser());
        this._registry.push(new Ping())
        this._registry.push(new RandValue())
        this._registry.push(new AnagrammCommand());
    }

    get(message) {
        for(var i = 0; i < this._registry.length; i++) {
            let cmd = this._registry[i];
            let length = cmd.label.length;

            if(message.content.substr(0, length) == cmd.label && length != 0) {
                cmd.run(message);
                break;
            }
            
            if(cmd.channel == message.channel.name) {
                cmd.run(message);
                break;
            }
        }
    }

    add(cmd) {
        this._registry.push(cmd);
    }
};
