import gulp from 'gulp';
import {path, tasks} from './const';

const FONTS = path.DIST + 'fonts/**/*';

gulp.task(tasks.CLIENT_FONT_DIST, () => {
  return gulp.src(FONTS, {base: path.DIST})
             .pipe(gulp.dest(path.DIST));
});
