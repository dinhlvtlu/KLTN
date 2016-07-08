module.exports = function(){
    var nodemon = require('gulp-nodemon');

    nodemon({
        script: 'app.js',
        ext: 'js',
        "ignore": [
            ".idea/",
            ".git/",
            "build/",
            "doc/",
            "temp/",
            "node_modules/",
            "src/fron-tend/public",
            "src/back-end/public",
            "src/common/public",
            "uploads/"
        ]
    });
}