import gulp from 'gulp';
import del from 'del';
import {path} from './const';

gulp.task('client.del_dist', () => del.sync([path.DIST]));
