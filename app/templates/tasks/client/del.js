import gulp from 'gulp';
import del from 'del';

const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

gulp.task('client.del_temp', () => del.sync([TEMP_DIR]));
gulp.task('client.del_dist', () => del.sync([DIST_DIR]));
