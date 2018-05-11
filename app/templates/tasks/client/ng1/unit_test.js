import gulp from "gulp"
import coveralls from "gulp-coveralls"
import {Server as Karma} from "karma"
import {tasks} from "./const"

gulp.task(tasks.CLIENT_UNIT_TEST, (done) => {
  return new Karma({
    configFile: process.cwd() + "/karma.conf.js",
    browsers: ["Chrome"],
    singleRun: true
  }, (exitCode) => done(exitCode)).start()
})

gulp.task(tasks.CLIENT_COVERAGE, gulp.series(tasks.CLIENT_UNIT_TEST, (done) => {
  return gulp.src("unit_coverage/**/lcov.info")
             .pipe(coveralls())
             .on('end', () => done())
}))
