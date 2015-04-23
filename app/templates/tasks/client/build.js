"use strict";

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const less = require('gulp-less');
const coveralls = require('gulp-coveralls');
const browserSync = require('browser-sync');

const DEV_DIR = './client/dev/';
const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

const _images = DEV_DIR + 'imgs/*';
const _fonts = DEV_DIR + 'fonts/*';
const _partials = DEV_DIR + 'partials/**/*';
const _indexHTML = DEV_DIR + 'index.html';
const _components = DEV_DIR + 'components/';

gulp.task('components:temp', function()
{
  return gulp
    .src(_components + '**/*')
    .pipe(gulp.dest(TEMP_DIR + 'components/'));
})

gulp.task('components:dist', function()
{
  gulp
    .src(_components + '**/*')
    .pipe(gulp.dest(DIST_DIR + 'components/'));

  gulp
    .src(_components + '**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR + 'components/'));
})

gulp.task('html,css,js:temp', function()
{
  return gulp
    .src(_indexHTML)
    .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
    .pipe(gulp.dest(TEMP_DIR));
})

gulp.task('partials:temp', function()
{
  return gulp
    .src(_partials)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
})

gulp.task('imgs:temp', function()
{
  return gulp
    .src(_images)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
})

gulp.task('fonts:temp', function()
{
  return gulp
    .src(_fonts)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
})


gulp.task('html,css,js:dist', function()
{
  return gulp
    .src(_indexHTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
})

gulp.task('fonts:dist', function()
{
  return gulp
    .src(_fonts)
    .pipe(gulp.dest(DIST_DIR + 'fonts/'));
})

gulp.task('partials:dist', function()
{
  return gulp
    .src(_partials)
    .pipe(gulp.dest(DIST_DIR + 'partials/'));
})

gulp.task('imgs:dist', function()
{
  return gulp
    .src(_images)
    .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
})

gulp.task('browser_sync', function()
{
  return browserSync.reload();
})

gulp.task('build', ['del_dist', 'test_client', 'inject:css:index', 'inject:js:index', 'partials:dist', 'imgs:dist', 'fonts:dist', 'html,css,js:dist', 'components:dist']); // dist build
gulp.task('build_temp', ['del_temp', 'inject:css:index', 'inject:js:index', 'partials:temp', 'imgs:temp', 'fonts:temp', 'html,css,js:temp', 'components:temp']); // browser-sync build

gulp.task('del_temp', function()
{
  return del.sync([TEMP_DIR]);
})

gulp.task('del_dist', function()
{
  return del.sync([DIST_DIR]);
})

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

gulp.task('default', ['build_temp', 'watch']);
