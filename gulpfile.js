const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'));
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

function minimizarImg(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.parallel(styles, scripts, minimizarImg);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}