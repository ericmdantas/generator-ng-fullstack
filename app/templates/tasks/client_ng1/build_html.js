import gulp from 'gulp';
import {path, tasks} from './const';

const VIEWS = path.DEV + 'todo/templates/**/*.html';
const INDEX_HTML = path.DEV + 'index.html';

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
  return gulp.src(VIEWS)
             .pipe(gulp.dest(path.DIST + 'views/'));
});
