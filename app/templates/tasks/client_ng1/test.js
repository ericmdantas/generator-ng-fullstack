import gulp from 'gulp';
import coveralls from 'gulp-coveralls';
import {server as karma} from 'karma';

const _rootDir = process.cwd();

gulp.task('client.unit_test', (done) => {
  return karma
    .start({
      configFile: _rootDir + '/karma.conf.js',
      browsers: ['Chrome'],
      singleRun: true
    }, done);
});

gulp.task('client.coverage', ['client.unit_test'], () => {
  return gulp.src('unit_coverage/**/lcov.info')
             .pipe(coveralls());
});
