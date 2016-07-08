var express = require("express");
var apiRouter = express.Router();

module.exports = function (app, injector) {

    apiRouter.use(function(req, res, next) {
        res.set("Access-Control-Allow-Origin", "http://localhost");
        res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    } );


    app.use("/api", apiRouter);

};

