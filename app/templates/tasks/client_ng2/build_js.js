import gulp from 'gulp';
import cssmin from 'gulp-uglify';
import tsc from 'gulp-typescript';
import {path, tasks} from './const';

const JS = path.DIST + '**/*.js';

gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(CSS, {base: path.DIST})
             .pipe(uglify())
             .pipe(gulp.dest(path.DIST));
});
