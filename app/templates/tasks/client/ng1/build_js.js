import gulp from "gulp";
import babel from "gulp-babel";
import {base, tasks} from "./const";

const JS = [
  base.DIST + "**/*.js", 
  "!" + base.DIST + "bower_components/**/*"
];

gulp.task(tasks.CLIENT_BUILD_JS_DIST, () => {
  return gulp.src(JS, {base: base.DIST})
             .pipe(babel({
               presets: [
                 "es2015",
                 "babili"
               ]
             }))
             .pipe(gulp.dest(base.DIST));
});
