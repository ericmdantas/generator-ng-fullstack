const gulp = require('gulp');

gulp.task('compile:babel', () => {
  return gulp.src(['**/*.es6', '!node_modules/**'])
    .pipe(babel({optional: ['es7.decorators']}))
    .pipe(gulp.dest('.'));
})
