import gulp from 'gulp';
import uglify from 'gulp-uglify';
import {path, tasks} from './const';

const JS = path.DIST + '**/*.js';

gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(JS, {base: path.DIST})
             .pipe(uglify())
             .pipe(gulp.dest(path.DIST));
});
