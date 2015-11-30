import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path} from './const';

const TS = path.DEV + ['dev/**/*.ts', '!node_modules'];

gulp.task('client.browser_sync', () => {
  return browserSync.reload();
});

gulp.task('client.watch', ['client.build_ts:dev', 'client.browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(TS);

  return gulp.watch(_watchable, ['client.build_ts:dev', 'client.browser_sync']);
});
