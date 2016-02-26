import gulp from 'gulp';
import {path, tasks} from './const';

const FONTS = path.DEV + 'fonts/*';

gulp.task(tasks.CLIENT_FONT_DIST, () => {
  return gulp.src(FONTS)
             .pipe(gulp.dest(path.DIST + 'fonts/'));
});
