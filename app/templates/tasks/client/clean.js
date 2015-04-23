"use strict";

const gulp = require('gulp');
const del = require('del');

const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

gulp.task('del_temp', function()
{
  return del.sync([TEMP_DIR]);
})

gulp.task('del_dist', function()
{
  return del.sync([DIST_DIR]);
})
