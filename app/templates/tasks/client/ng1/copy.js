import gulp from "gulp";
import {base, tasks} from "./const";

gulp.task(tasks.CLIENT_COPY, () => {
  return gulp.src(base.DEV + "**/*")
             .pipe(gulp.dest(base.DIST));
});
