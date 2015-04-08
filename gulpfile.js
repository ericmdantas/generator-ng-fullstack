"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

var _es6 = '**/*.es6';

gulp.task('compile:babel', function()
{
    return gulp.src(_es6)
               .pipe(babel({optional: ["es7.decorators"]}))
               .pipe(rename({extname: '.js'}))
               .pipe(gulp.dest('.'));
});

gulp.task('watch:es6', function()
{
    return gulp.watch(_es6, ['compile:babel']);
});
