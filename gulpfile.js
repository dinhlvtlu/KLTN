/**
 * Created by LeVan on 6/9/2016.
 */
var gulp = require("gulp");

gulp.task("start-server", function () {
    return require("./src/build/start-server.js")();
});