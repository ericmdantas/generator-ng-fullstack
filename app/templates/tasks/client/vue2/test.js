import gulp from "gulp";
import coveralls from "gulp-coveralls";
import {Server as Karma} from "karma";
import {tasks} from "./const";

gulp.task(tasks.CLIENT_UNIT_TEST, (done) => {
  return new Karma({
    configFile: process.cwd() + "/karma.conf.js",
    browsers: ["Chrome"],
    singleRun: true
  }, done).start();
});

gulp.task(tasks.CLIENT_COVERAGE, [tasks.CLIENT_UNIT_TEST], () => {
  return gulp.src("unit_coverage/**/lcov.info").pipe(coveralls());
});
