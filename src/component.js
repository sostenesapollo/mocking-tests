exports.Component = {

    name: "component",

    init(name) {
        this._name = name
        console.log('init', this._name);
        return this
    },

    run() {
        console.log('running', this._name);
    },

    close() {
        console.log('close', this._name);
    }

}