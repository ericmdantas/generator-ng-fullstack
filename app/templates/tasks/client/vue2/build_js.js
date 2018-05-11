import gulp from "gulp";
import babel from "gulp-babel";
import {base, tasks} from "./const";

const JS = base.DIST + "**/*.js";

gulp.task(tasks.CLIENT_BUILD_JS_DIST, () => {
  return gulp.src(JS, {base: base.DIST})
             .pipe(babel({
               presets: [
                 "env",
                 "minify"
               ]
             }))
             .pipe(gulp.dest(base.DIST));
});
