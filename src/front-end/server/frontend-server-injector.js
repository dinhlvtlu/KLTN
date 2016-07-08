module.exports = function (staticConfig) {

    var Injector = require("./injector").Injector;
    var injector = new Injector();

    injector.setObjects({
        staticConfig: staticConfig,


    });
    return injector;
};