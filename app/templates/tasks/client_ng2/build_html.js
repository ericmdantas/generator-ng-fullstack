import gulp from 'gulp';
import {path, tasks} from './const';

const VIEWS = path.DEV + 'views/**/*';
const INDEX_HTML = path.DEV + 'index.html';

gulp.task(tasks.CLIENT_VIEW_DIST, () => {
  return gulp.src(VIEWS)
             .pipe(gulp.dest(path.DIST + 'views/'));
});
