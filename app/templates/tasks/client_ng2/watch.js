import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path} from './const';

const TS = path.DEV + '**/*.ts';
const CSS = path.DEV + '**/*.css';
const HTML = path.DEV + '**/*.html';

gulp.task('client.browser_sync', () => {
  return browserSync.reload();
});

gulp.task('client.watch', ['client.build_ts:dev', 'client.browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(TS);
  _watchable.push(CSS);
  _watchable.push(HTML);

  return gulp.watch(_watchable, ['client.build_ts:dev', 'client.browser_sync']);
});
