const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

// gulp.task('es625',function(){
//     console.log(666);
// })

// exports.es625 = function(done){
//     console.log(110);
//     setTimeout(()=>{
//         done();
//     },3000)
// }
// exports.compress = function(done){
//     console.log('compress');
//     done();
// }

function es625(done){
    console.log('es625');
    gulp.src('./src/js/common.js')
    .pipe(babel({
        presets:["@babel/preset-env"],
    }))
    .pipe(gulp.dest('./dist'))
    done();
}

function mergeJS(done){
    console.log('mergeJS');
    done();
}

function compressJS(done){
    console.log('compressJS');
    done();
}

function compileJS(done){
    gulp.src('./src/**/*.js')
    .pipe(babel({
        presets:["@babel/preset-env"],
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(uglify())
    .pipe(rename({
        suffix:".min",
        }))
    .pipe(gulp.dest('./dest/js'))
    done();
}

exports.es625 = es625
exports.mergeJS = mergeJS
exports.compressJS = compressJS
exports.compileJS = compileJS

exports.listen = function(){
    gulp.watch('./src/**/*.js',gulp.series(mergeJS,es625,compressJS),)
}