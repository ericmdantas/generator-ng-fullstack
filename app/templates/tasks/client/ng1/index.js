import gulp from "gulp";
import {base, tasks} from "./const";

gulp.task(tasks.CLIENT_BUILD_DIST, gulp.series(
    tasks.CLIENT_UNIT_TEST,
    tasks.CLIENT_DEL_DIST,
    tasks.CLIENT_COPY,
    tasks.CLIENT_VIEWS_DIST,
    gulp.parallel(
      tasks.CLIENT_IMAGE_DIST,
      tasks.CLIENT_BUILD_JS_DIST,
      tasks.CLIENT_BUILD_CSS_DIST
    ),
    tasks.CLIENT_REVISION
  )
)
