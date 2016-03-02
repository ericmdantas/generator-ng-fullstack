import gulp from 'gulp';
import cssmin from 'gulp-uglify';
import rev from 'gulp-rev';
import tsc from 'gulp-typescript';
import {path, tasks} from './const';

const JS = path.DEV + '**/*.js';

gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(CSS, {base: path.DEV})
             .pipe(uglify())
             .pipe(rev())
             .pipe(gulp.dest(path.DIST));
});
