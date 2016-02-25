import gulp from 'gulp';
import {tasks} from './const';

gulp.task(tasks.CLIENT_BUILD_DIST, [
  tasks.CLIENT_UNIT_TEST,
  tasks.CLIENT_DEL_DIST,
  tasks.CLIENT_VIEW_DIST,
  tasks.CLIENT_IMAGE_DIST,
  tasks.CLIENT_FONT_DIST,
  tasks.CLIENT_REV_DIST
]);
