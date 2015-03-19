"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var less = require('gulp-less');
var del = require('del');
var coveralls = require('gulp-coveralls');
var karma = require('karma').server;

var _developmentDir = './client/dev/';
var _distributionDir = './client/dist/';

var _images = _developmentDir + 'imgs/*';
var _fonts = _developmentDir + 'fonts/*';
var _partials = _developmentDir + 'partials/**/*';

var _indexHTML = _developmentDir + 'index.html';

gulp.task('build', ['del_dist', 'unit_test_client'], function()
{
    gulp
        .src(_indexHTML)
        .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
        .pipe(gulp.dest(_distributionDir));

    gulp
        .src(_images)
        .pipe(gulp.dest(_distributionDir + 'imgs/'));

    gulp
        .src(_partials)
        .pipe(gulp.dest(_distributionDir + 'partials/'));

    gulp
        .src(_fonts)
        .pipe(gulp.dest(_distributionDir + 'fonts/'));
});

gulp.task('del_dist', function()
{
    return del([_distributionDir]);
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
