import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import tsc from 'gulp-typescript';
import {path, tasks} from './const';

const TS_CONFIG = path.ROOT + 'tsconfig.json';

gulp.task(tasks.CLIENT_BUILD_TS_DEV, () => {
  let tsconfigSrc = tsc.createProject(TS_CONFIG);

  return tsconfigSrc.src()
                    .pipe(tsc(tsconfigSrc))
                    .js
                    .pipe(gulp.dest('.'));
});

gulp.task(tasks.CLIENT_BUILD_TS_DIST, () => {
  let tsconfigSrc = tsc.createProject(TS_CONFIG);

  return tsconfigSrc.src({base: path.DEV})
                    .pipe(tsc(tsconfigSrc))
                    .js
                    .pipe(gulp.dest(path.DIST));
});
