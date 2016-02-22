import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import tsc from 'gulp-typescript';
import {path} from './const';

const TS_CONFIG = path.ROOT + 'tsconfig.json';

gulp.task('client.build_ts:dev', () => {
  let tsconfigSrc = tsc.createProject(TS_CONFIG);

  return tsconfigSrc.src()
                    .pipe(tsc(tsconfigSrc))
                    .js
                    .pipe(gulp.dest(path.DEV));
});
