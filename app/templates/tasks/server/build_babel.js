import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('server.compile_babel', () => {
  return gulp.src(['**/*.es6', '!node_modules/**'])
             .pipe(babel({stage: 0}))
             .pipe(gulp.dest('.'));
});
