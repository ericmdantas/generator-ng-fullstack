import gulp from 'gulp';
import coveralls from 'gulp-coveralls';
import {server as karma} from 'karma';

gulp.task('client.unit_test', (done) => {
  return karma
    .start({
      configFile: __dirname + '/karma.conf.js',
      browsers: ['PhantomJS'],
      singleRun: true
    }, done);
});

gulp.task('client.coverage', ['client.unit_test'], () => {
  return gulp.src('unit_coverage/**/lcov.info')
             .pipe(coveralls());
});
