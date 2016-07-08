var express = require("express");
var apiRouter = express.Router();

module.exports = function (app, injector) {

    apiRouter.use(function(req, res, next) {
        res.set("Access-Control-Allow-Origin", "http://localhost");
        res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    } );

    require("./login-controller")(apiRouter, injector);
    require("./hocvi-controller")(apiRouter, injector);
    require("./chucdanh-controller")(apiRouter, injector);
    require("./khoa-controller")(apiRouter, injector);
    require("./bomon-controller")(apiRouter, injector);
    require("./giangvien-controller")(apiRouter, injector);

    app.use("/be/api", apiRouter);

};

