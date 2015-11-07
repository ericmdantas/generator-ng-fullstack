import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path} from './const';

const JS = path.DEV + 'js/**/*.js';
const LESS = path.DEV + 'css/**/*.less';
const IMAGES = path.DEV + 'imgs/*';
const FONTS = path.DEV + 'fonts/*';
const INDEX_HTML = path.DEV + 'index.html';
const COMPONENTS = path.DEV + 'components/';
const BOWER = 'bower.json';

gulp.task('client.browser_sync', () => {
  return browserSync.reload();
});

gulp.task('client.watch', ['client.del_temp', 'client.build_temp', 'client.browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(INDEX_HTML);
  _watchable.push(JS);
  _watchable.push(LESS);
  _watchable.push(IMAGES);
  _watchable.push(FONTS);
  _watchable.push(BOWER);

  return gulp.watch(_watchable, ['client.build_temp', 'client.browser_sync']);
});
