import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import {base, tasks} from './const';

const IMAGES = base.DIST + 'common/images/*';

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES, {base: base.DIST})
			       .pipe(imageMin())
             .pipe(gulp.dest(base.DIST));
});
