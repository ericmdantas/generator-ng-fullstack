import gulp from "gulp"
import {base, tasks} from "./const"

gulp.task(tasks.CLIENT_COPY, (done) => {
  return gulp.src(base.DEV + "**/*")
             .pipe(gulp.dest(base.DIST))
             .on('end', () => done())
})
