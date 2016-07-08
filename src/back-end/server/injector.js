function Injector() {
    var injector = this;

    injector.factories = {};
    injector.objects = {};
    injector.runs = [];

}

Injector.prototype = {
    run: function(action) {
        var injector = this;
        injector.runs.push(action);
        return injector;
    },
    runAll: function() {
        var injector = this;
        for (var i = 0; i < injector.runs.length; i++) {
            var run = injector.runs[i];
            injector.diInvoke(run);
        }
    },
    di: function(param) {
        var injector = this;
        if (typeof param == "string") {
            return injector.get(param);
        } else {
            return injector.diInvoke(param);
        }
    },
    diInvoke: function(func) {
        var listStr = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '');
        var deps = listStr === '' ? [] : listStr.split(',');

        var args = [];
        for (var i = 0; i < deps.length; i++) {
            var objName = deps[i];
            args.push(this.get(objName));
        }
        return func.apply(null, args);
    },
    setObjects: function(params) {
        for (var k in params) {
            this.objects[k] = params[k];
        }
        return this;
    },
    value: function(name, obj) {
        this.objects[name] = obj;
        return this;
    },
    get: function(name) {
        name = name.replace(/^\s+|\s+$/g, "");


        var object = this.objects[name];
        if (object != null) {
            return object;
        }

        // Creating it
        var factory = this.factories[name];
        if (factory == null) {
            throw "Can not find factory function of [" + name + "]";
        }
        object = this.diInvoke(factory);

        this.objects[name] = object;
        return object;
    },
    factory: function(name, factory) {
        this.factories[name] = factory;
    }
};

module.exports = {
    Injector: Injector
};