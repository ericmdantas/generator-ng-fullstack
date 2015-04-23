"use strict";

const gulp = require('gulp');
const coveralls = require('gulp-coveralls');
const karma = require('karma').server;

gulp.task('test_client', function(done)
{
  return karma
    .start({
      configFile: __dirname + '/karma.conf.js',
      browsers: ['PhantomJS'],
      singleRun: true
    }, done);
})

gulp.task('coverage_frontend', ['test_client'], function()
{
  return gulp
    .src('unit_coverage/**/lcov.info')
    .pipe(coveralls());
})
