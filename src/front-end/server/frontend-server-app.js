var express = require('express');

function startServer(staticConfig, server, app) {
    var port = staticConfig["http-frontend-port"];
    server.listen(port, function () {
        console.log("Server front-end running on port: " + port);
    });
}

module.exports = {
    startServer: function (staticConfig) {

        var app = express();
        var bodyParser = require('body-parser');
        var server = require('http').createServer(app);

        app.use("/api", bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        var injector = require("./frontend-server-injector")(staticConfig);

        app.use(express.static(__dirname + "/../public"));
        app.use(express.static(__dirname + "/../../common/public"));

        require("./controllers/controllers.js")(app, injector);
        injector.runAll();

        startServer(staticConfig, server, app);

    }
}