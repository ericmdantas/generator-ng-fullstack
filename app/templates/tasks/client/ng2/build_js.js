import gulp from "gulp";
import uglify from "gulp-uglify";
import {base, tasks} from "./const";

const JS = base.DIST + "**/*.js";

gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(JS, {base: base.DIST})
             .pipe(uglify())
             .pipe(gulp.dest(base.DIST));
});
