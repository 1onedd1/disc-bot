module.exports = class RegistryCommand{
    _registry = new Array();

    add(command) {
        this._registry.push(command)
    }

    get(message) {
        this._registry.forEach(function(item, index, array) {

            if(item.label == message.content) {
                item.run(message);
                console.log(1)
            }
            console.log(item.label)
        })
    }
};
