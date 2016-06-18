import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import {path, tasks} from './const';

const CSS = path.DIST + '**/*.css';

gulp.task(tasks.CLIENT_BUILD_CSS_DIST, () => {
  return gulp.src(CSS, {base: path.DIST})
             .pipe(cssmin())
             .pipe(gulp.dest(path.DIST));
});
