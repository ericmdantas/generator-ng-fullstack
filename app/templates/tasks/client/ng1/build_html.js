import gulp from "gulp"
import htmlmin from "gulp-htmlmin"
import nginclude from "gulp-nginclude"
import {base, tasks} from "./const"

const VIEWS = [
  base.DIST + "**/*.html"
]

gulp.task(tasks.CLIENT_VIEWS_DIST, (done) => {
  return gulp.src(VIEWS, {base: base.DIST})
			       .pipe(htmlmin({
               collapseWhitespace: true,
               caseSensitive: true
             }))
             .pipe(nginclude())
             .pipe(gulp.dest(base.DIST))
             .on('end', () => done());
})
