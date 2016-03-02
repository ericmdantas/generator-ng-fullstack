import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rev from 'gulp-rev';
import {path, tasks} from './const';

const JS = path.DEV + '**/*.js';

gulp.task(tasks.CLIENT_BUILD_JS_DIST, () => {
  return gulp.src(JS, {base: path.DEV})
             .pipe(uglify())
             .pipe(gulp.dest(path.DIST));
});
