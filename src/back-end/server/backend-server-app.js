var express = require('express');

function startServer(staticConfig, server, app) {
    var port = staticConfig["http-backend-port"];
    server.listen(port, function () {
        console.log("Server back-end running on port: " + port);
    });
}

module.exports = {
    startServer: function (staticConfig) {

        var app = express();
        var bodyParser = require('body-parser');
        var server = require('http').createServer(app);

        app.use("/be/api", bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        var injector = require("./backend-server-injector")(staticConfig);

        app.use(express.static(__dirname + "/../public"));
        app.use(express.static(__dirname + "/../../common/public"));

        require("./controllers/controllers.js")(app, injector, staticConfig);
        injector.runAll();

        startServer(staticConfig, server, app);
    }
};