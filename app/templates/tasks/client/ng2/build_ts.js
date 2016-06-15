import gulp from 'gulp';
import tsc from 'gulp-typescript';
import {path, tasks} from './const';

const TS_CONFIG = path.ROOT + 'tsconfig.json';

gulp.task(tasks.CLIENT_BUILD_TS, () => {
  let tsconfigSrc = tsc.createProject(TS_CONFIG);

  return tsconfigSrc.src()
                    .pipe(tsc(tsconfigSrc))
                    .js
                    .pipe(gulp.dest('.'));
});
