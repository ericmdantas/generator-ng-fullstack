import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import {path, tasks} from './const';

const IMAGES = path.DEV + 'common/images/*';

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES, {base: path.DEV})
			       .pipe(imageMin())
             .pipe(gulp.dest(path.DIST));
});
