module.exports = class RegistryCommand{
    _registry = new Array();

    add(command) {
        this._registry.push(command)
    }

    get(message) {
        for(var i = 0; i < this._registry.length; i++) {
            if(this._registry[i].label == message.content) {
                this._registry[i].run(message);
            }
        }
    }
};
