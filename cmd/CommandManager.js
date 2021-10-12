const InfoUser = require('./InfoUser')
const Ping = require('./Ping')
const RandValue = require("./RandValue")
const Help = require("./Help")

module.exports = class CommandManager{
    _registry = new Array();

    constructor() {
        this._registry.push(new Help());
        this._registry.push(new InfoUser());
        this._registry.push(new Ping())
        this._registry.push(new RandValue())
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
