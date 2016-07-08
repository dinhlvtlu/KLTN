var gulp = require('gulp');

module.exports = function(src, destDir, watch) {

    var sass = require('gulp-sass');
    var compileSass = function () {
        console.log("Compiling " + src + " sass files");
        return gulp.src(src)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(destDir));
    };

    gulp.watch(watch, compileSass);
    compileSass();

    console.log("Watching scss files");
};