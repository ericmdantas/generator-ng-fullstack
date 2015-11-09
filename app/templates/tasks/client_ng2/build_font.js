import gulp from 'gulp';
import {path} from './const';

const FONTS = path.DEV + 'fonts/*';

gulp.task('client.fonts:dist', () => {
  return gulp.src(FONTS)
             .pipe(gulp.dest(path.DIST + 'fonts/'));
});
