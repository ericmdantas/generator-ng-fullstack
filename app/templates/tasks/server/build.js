"use strict";

const gulp = require('gulp');

gulp.task('compile:babel', function()
{
  return gulp.src(['**/*.es6', '!node_modules/**'])
    .pipe(babel({optional: ['es7.decorators']}))
    .pipe(gulp.dest('.'));
})
