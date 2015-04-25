"use strict";

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const inject = require('gulp-inject');

const DEV_DIR = './client/dev/';
const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

const JS = DEV_DIR + 'js/**/*.js';
const LESS = DEV_DIR + 'css/**/*.less';
const IMAGES = DEV_DIR + 'imgs/*';
const FONTS = DEV_DIR + 'fonts/*';
const PARTIALS = DEV_DIR + 'partials/**/*';
const INDEX_HTML = DEV_DIR + 'index.html';
const BOWER = 'bower.json';
const COMPONENTS = DEV_DIR + 'components/';
const ES6 = '**/*.es6';

gulp.task('inject:js:index', function()
{
  return gulp.src(INDEX_HTML)
    .pipe(inject(gulp.src(['./client/dev/**/*.js', '!./client/dev/bower_components/**'], {read: false}), {relative: true}))
    .pipe(gulp.dest('.'));
})

gulp.task('inject:css:index', function()
{
  return gulp.src(INDEX_HTML)
    .pipe(inject(gulp.src(['./client/dev/css/*.{less,css}', '!./client/dev/bower_components/**'], {read: false}), {relative: true}))
    .pipe(gulp.dest('.'));
})

gulp.task('bower', function()
{
  return gulp
    .src(INDEX_HTML)
    .pipe(wiredep())
    .pipe(gulp.dest(DEV_DIR));
});

gulp.task('components:temp', function()
{
  return gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(TEMP_DIR + 'components/'));
})

gulp.task('components:dist', function()
{
  gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(DIST_DIR + 'components/'));

  gulp
    .src(COMPONENTS + '**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR + 'components/'));
})

gulp.task('html,css,js:temp', function()
{
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
    .pipe(gulp.dest(TEMP_DIR));
})

gulp.task('partials:temp', function()
{
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
})

gulp.task('imgs:temp', function()
{
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
})

gulp.task('fonts:temp', function()
{
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
})


gulp.task('html,css,js:dist', function()
{
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
})

gulp.task('fonts:dist', function()
{
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(DIST_DIR + 'fonts/'));
})

gulp.task('partials:dist', function()
{
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(DIST_DIR + 'partials/'));
})

gulp.task('imgs:dist', function()
{
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
})

gulp.task('browser_sync', function()
{
  return browserSync.reload();
})

gulp.task('build', ['del_dist', 'test_client', 'inject:css:index', 'inject:js:index', 'partials:dist', 'imgs:dist', 'fonts:dist', 'html,css,js:dist', 'components:dist']); // dist build
gulp.task('build_temp', ['del_temp', 'inject:css:index', 'inject:js:index', 'partials:temp', 'imgs:temp', 'fonts:temp', 'html,css,js:temp', 'components:temp']); // browser-sync build

gulp.task('watch', ['del_temp', 'inject:css:index', 'inject:js:index', 'bower', 'build_temp', 'browser_sync'], function()
{
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(INDEX_HTML);
  _watchable.push(JS);
  _watchable.push(LESS);
  _watchable.push(IMAGES);
  _watchable.push(PARTIALS);
  _watchable.push(FONTS);
  _watchable.push(BOWER);
  _watchable.push(ES6);

  return gulp.watch(_watchable, ['inject:css:index', 'inject:js:index', 'bower', 'build_temp', 'browser_sync']);
});

gulp.task('default', ['build_temp', 'watch']);
