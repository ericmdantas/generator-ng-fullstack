"use strict";

// TODO: modularize this, make sure different files know to do one thing well, so it won't be as messy as this one

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var less = require('gulp-less');
var del = require('del');
var coveralls = require('gulp-coveralls');
var karma = require('karma').server;
var watch = require('gulp-watch');

var DEV_DIR = './client/dev/';
var TEMP_DIR = './client/__tmp/'; // working on it dir
var DIST_DIR = './client/dist/';

var _images = DEV_DIR + 'imgs/*';
var _fonts = DEV_DIR + 'fonts/*';
var _partials = DEV_DIR + 'partials/**/*';

var _indexHTML = DEV_DIR + 'index.html';

gulp.task('build', ['del_dist', 'unit_test_client'], function()
{
    gulp
        .src(_indexHTML)
        .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
        .pipe(gulp.dest(DIST_DIR));

    gulp
        .src(_images)
        .pipe(gulp.dest(DIST_DIR + 'imgs/'));

    gulp
        .src(_partials)
        .pipe(gulp.dest(DIST_DIR + 'partials/'));

    gulp
        .src(_fonts)
        .pipe(gulp.dest(DIST_DIR + 'fonts/'));
});

gulp.task('watch', ['del_temp'], function()
{
  var _runItAll = function()
  {
    gulp
      .src(_indexHTML)
      .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
      //.pipe(watch(_indexHTML))
      .pipe(gulp.dest(TEMP_DIR));

    gulp
      .src(_indexHTML)
      .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
      //.pipe(watch('css/*.less'))
      .pipe(gulp.dest(TEMP_DIR));

    gulp
      .src(_indexHTML)
      .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
      //.pipe(watch('js/**/*.js'))
      .pipe(gulp.dest(TEMP_DIR));

    gulp
      .src(_images)
      //.pipe(watch(_images))
      .pipe(gulp.dest(TEMP_DIR + 'imgs/'));

    gulp
      .src(_partials)
      //.pipe(watch(_partials))
      .pipe(gulp.dest(TEMP_DIR + 'partials/'));

    gulp
      .src(_fonts)
      //.pipe(watch(_fonts))
      .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
  }

  _runItAll();
});

gulp.task('del_temp', function()
{
  return del([TEMP_DIR]);
})

gulp.task('del_dist', function()
{
    return del([DIST_DIR]);
})

gulp.task('unit_test_client', function(done)
{
    karma
        .start({
            configFile: __dirname + '/karma.conf.js',
            browsers: ['PhantomJS'],
            singleRun: true
        }, done);
})

gulp.task('coverage_frontend', ['unit_test'], function()
{
    gulp
        .src('unit_coverage/**/lcov.info')
        .pipe(coveralls());
})
