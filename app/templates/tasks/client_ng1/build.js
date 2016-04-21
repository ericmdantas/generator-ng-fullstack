import gulp from 'gulp';
import runSequence from 'run-sequence';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_BUILD_DIST, () => {
  runSequence(tasks.CLIENT_UNIT_TEST,
              tasks.CLIENT_DEL_DIST,
              tasks.CLIENT_COPY,
              tasks.CLIENT_VIEWS_DIST,
              [tasks.CLIENT_IMAGE_DIST,
               tasks.CLIENT_BUILD_JS_DIST,
               tasks.CLIENT_BUILD_CSS_DIST]);
});
