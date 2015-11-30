import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import tsc from 'gulp-typescript';
import {path} from './const';

const TS = path.DEV + '**/*.ts';
const TS_CONFIG = path.DEV + 'tsconfig.json';

gulp.task('client.build_ts', () => {
  let tsconfig = tsc.createProject('../../client/dev/tsconfig.json');

  return tsconfig.src()
                 .pipe(tsc(tsconfig))
                 .js
                 .pipe(gulp.dest('.'));
});
