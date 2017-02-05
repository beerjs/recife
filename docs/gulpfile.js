'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/'))
        .pipe(browserSync.stream());
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
});