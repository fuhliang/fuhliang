const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

exports.compileSass = function(done){
    gulp.src('./src/sass/*.scss')
    .pipe(sass({
        outputStyle:'expanded'//compressed(压缩)
    }).on('error',sass.logError))
    .pipe(gulp.dest('./dist/css'))
    done();
}