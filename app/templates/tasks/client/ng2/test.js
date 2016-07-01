import gulp from 'gulp';
import coveralls from 'gulp-coveralls';
import {Server as Karma} from 'karma';
import {tasks} from './const';

gulp.task(tasks.CLIENT_UNIT_TEST, (done) => {
  let _karma = new Karma({
    configFile: process.cwd() + '/karma.conf.js',
    browsers: ['Chrome'],
    singleRun: true
  }, done);

  _karma.start();
});

gulp.task(tasks.CLIENT_COVERAGE, [tasks.CLIENT_UNIT_TEST], () => {
  return gulp.src('unit_coverage/**/lcov.info')
             .pipe(coveralls());
});
