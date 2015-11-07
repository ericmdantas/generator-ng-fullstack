import gulp from 'gulp';
import {path} from './const';

const IMAGES = path.DEV + 'imgs/*';

gulp.task('client.imgs:temp', () => {
  return gulp.src(IMAGES)
             .pipe(gulp.dest(path.TMP + 'imgs/'));
});

gulp.task('client.imgs:dist', () => {
  return gulp.src(IMAGES)
             .pipe(gulp.dest(path.DIST + 'imgs/'));
});
