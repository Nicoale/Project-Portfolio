'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var watch= require("gulp-watch");
sass.compiler = require("node-sass");

gulp.task('sass', function () {
    //watch('.sass/**/*.scss',function(){ 
        return  gulp.src('./sass/**/*.scss') //take the files in sass directory
        .pipe(sass().on('error' , sass.logError)) // convert to csss and log any error if there is
        .pipe(gulp.dest('./public/css')); // put the resulting files inside css directory
//})
});
gulp.task('sass', function () {
        return  gulp.src('./sass/**/*.scss') //take the files in sass directory
        .pipe(sass().on('error' , sass.logError)) // convert to csss and log any error if there is
        .pipe(gulp.dest('./public/css')); // put the resulting files inside css directory
});

