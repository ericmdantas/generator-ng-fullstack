import gulp from "gulp"
import babel from "gulp-babel"
import {base, tasks} from "./const"
import embedTemplates from "gulp-angular-embed-templates"

const JS = [
  base.DIST + "**/*.js"
];

gulp.task(tasks.CLIENT_BUILD_JS_DIST, (done) => {
  return gulp.src(JS, {base: base.DIST})
             .pipe(babel())
             .pipe(embedTemplates())
             .pipe(gulp.dest(base.DIST))
             .on('end', () => done());
})
