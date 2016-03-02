import gulp from 'gulp';
import {path, tasks} from './const';

const IMAGES = path.DEV + 'images/*';

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES)
             .pipe(gulp.dest(path.DIST + 'images/'));
});
