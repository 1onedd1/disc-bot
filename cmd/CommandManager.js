const InfoUser = require('./InfoUser')
const Ping = require('./Ping')
const RandValue = require("./RandValue")

module.exports = class CommandManager{
    _registry = new Array();

    constructor() {
        this._registry.push(new InfoUser());
        this._registry.push(new Ping())
        this._registry.push(new RandValue())
    }

    get(message) {
        for(var i = 0; i < this._registry.length; i++) {
            let length = this._registry[i].label.length;
            if(this._registry[i].label == message.content || message.content.substring(0, length) === this._registry[i].label) {
                this._registry[i].run(message);
                break;
            }
        }
    }
};
