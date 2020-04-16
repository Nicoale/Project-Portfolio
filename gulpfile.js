'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat")
var watch= require("gulp-watch");
sass.compiler = require("node-sass");

gulp.task('sass', function () {
        return watch('.sass/**/*.scss',function(){ 
         gulp.src('./sass/**/*.scss') //take the files in sass directory
        .pipe(sass().on('error' , sass.logError)) // convert to csss and log any error if there is
        .pipe(gulp.dest('./public/css')); // put the resulting files inside css directory
        })
})



gulp.task('js', function() {
    return gulp.src('./js/*.js')// takes all the js files 
        .pipe(concat('deposits.js'))// puts them all together 
        .pipe(gulp.dest('public/javascript'))// moves them to a javascript folder in public
});