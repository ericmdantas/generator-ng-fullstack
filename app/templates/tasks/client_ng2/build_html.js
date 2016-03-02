import gulp from 'gulp';
import {path, tasks} from './const';

const HTML = path.DEV + '**/*.html';

gulp.task(tasks.CLIENT_VIEW_DIST, () => {
  return gulp.src(HTML, {base: path.DEV})
             .pipe(gulp.dest(path.DIST));
});
