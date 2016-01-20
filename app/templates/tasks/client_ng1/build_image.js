import gulp from 'gulp';
import {path} from './const';

const IMAGES = path.DEV + 'common/images/*';

gulp.task('client.imgs:dist', () => {
  return gulp.src(IMAGES)
             .pipe(gulp.dest(path.DIST + 'imgs/'));
});
