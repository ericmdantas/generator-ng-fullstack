import gulp from 'gulp';
import {path} from './const';

const VIEWS = path.DEV + 'todo/templates/**/*';
const INDEX_HTML = path.DEV + 'index.html';

gulp.task('client.views:dist', () => {
  return gulp.src(VIEWS)
             .pipe(gulp.dest(path.DIST + 'views/'));
});
