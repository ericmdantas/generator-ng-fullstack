import gulp from 'gulp';

const ES6 = '**/*.es6';

gulp.task('server.watch', () => {
  _watchable.push(ES6);

  return gulp.watch(_watchable, []);
});
