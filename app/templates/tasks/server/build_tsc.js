import gulp from 'gulp';
import tsc from 'gulp-typescript';

gulp.task('server.compile_tsc', () => {
  return gulp.src(['**/*.ts', '!node_modules/**'])
             .pipe(tsc({}))
             .pipe(gulp.dest('.'));
});
