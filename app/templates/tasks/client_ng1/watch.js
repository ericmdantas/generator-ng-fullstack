import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path} from './const';

const JS = path.DEV + '**/*.js';
const INDEX_HTML = path.DEV + 'index.html';

gulp.task('client.browser_sync', () => {
  return browserSync.reload();
});

gulp.task('client.watch', ['client.browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(INDEX_HTML);
  _watchable.push(JS);

  return gulp.watch(_watchable, ['client.browser_sync']);
});
