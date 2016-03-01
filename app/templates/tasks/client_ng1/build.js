import gulp from 'gulp';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_BUILD_DIST, [
  tasks.CLIENT_VIEW_DIST,
  tasks.CLIENT_FONT_DIST,
  tasks.CLIENT_IMAGE_DIST,
  tasks.CLIENT_BUILD_JS_DIST,
  tasks.CLIENT_BUILD_CSS_DIST
]);
