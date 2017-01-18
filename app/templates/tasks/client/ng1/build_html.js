import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import rev from "gulp-rev-append";
import {base, tasks} from "./const";

const VIEWS = [
  base.DIST + "**/*.html",
  "!" + base.DIST + "bower_components/**/*.html"
];

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
  return gulp.src(VIEWS, {base: base.DIST})
             .pipe(rev())
			       .pipe(htmlmin({
               collapseWhitespace: true,
               caseSensitive: true
             }))
             .pipe(gulp.dest(base.DIST));
});
