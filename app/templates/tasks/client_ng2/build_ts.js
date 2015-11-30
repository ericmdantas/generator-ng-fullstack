import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import tsc from 'gulp-typescript';
import {path} from './const';

const TS_CONFIG = path.DEV + 'tsconfig.json';

gulp.task('client.build_ts:dev', () => {
  let tsconfigSrc = tsc.createProject(path.DEV + 'tsconfig.json');
  let tsconfigTest = tsc.createProject(path.TEST + '/client/todo/tsconfig.json');

  tsconfigSrc.src()
             .pipe(tsc(tsconfigSrc))
             .js
             .pipe(gulp.dest(path.DEV));

  return tsconfigTest.src()
             .pipe(tsc(tsconfigTest))
             .js
             .pipe(gulp.dest(path.TEST));
});
