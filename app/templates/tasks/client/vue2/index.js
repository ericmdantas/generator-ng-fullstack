import gulp from "gulp";
import runSequence from "run-sequence";
import {base, tasks} from "./const";

gulp.task(tasks.CLIENT_BUILD_DIST, () => {
  return new Promise((resolve, reject) => {
    runSequence(
                  // tasks.CLIENT_UNIT_TEST,
                  tasks.CLIENT_DEL_DIST,
                  tasks.CLIENT_COPY,
                  tasks.CLIENT_VIEWS_DIST,
                  [
                    tasks.CLIENT_IMAGE_DIST,
                    tasks.CLIENT_BUILD_JS_DIST,
                    tasks.CLIENT_BUILD_CSS_DIST
                  ],
                  
                  resolve
                );       
  });
});
