import gulp from 'gulp';
import del from 'del';

const TEMP_DIR = './sever/__tmp/'; // working on it dir
const DIST_DIR = './server/dist/';

gulp.task('server.del_temp', () => {
  return del.sync([TEMP_DIR]);
});

gulp.task('server.del_dist', () => {
  return del.sync([DIST_DIR]);
});
