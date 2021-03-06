
var $q = require("q");

module.exports = function (gulp) {

    var sort = require('gulp-sort');
    var inject = require('gulp-inject');

    var defer = $q.defer();
    var sources = gulp.src('./src/front-end/public/angular/**/*.js', {read: false}).pipe(sort());

    gulp.src("./src/front-end/public/index.html").pipe(inject(sources, {
            starttag: "<!-- inject:spa-js-start -->",
            endtag: "<!-- inject:spa-js-end -->",
            transform: function (filepath, file, i, length) {
                return "<script src=\"" + filepath.replace(new RegExp("^/src/front-end/public/"), "") + "\"></script>";
            }
        }))
        .pipe(gulp.dest('./src/front-end/public/'))
        .on("end", function () {
            console.log("Injected public js files");
            defer.resolve();
        })
    ;
    return defer.promise;

};