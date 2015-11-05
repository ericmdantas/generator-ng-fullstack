import gulp from 'gulp';
import browserSync from 'browser-sync';

const JS = DEV_DIR + 'js/**/*.js';
const LESS = DEV_DIR + 'css/**/*.less';
const IMAGES = DEV_DIR + 'imgs/*';
const FONTS = DEV_DIR + 'fonts/*';
const PARTIALS = DEV_DIR + 'partials/**/*';
const INDEX_HTML = DEV_DIR + 'index.html';
const BOWER = 'bower.json';
const COMPONENTS = DEV_DIR + 'components/';
const ES6 = '**/*.es6';

gulp.task('client.watch', ['del_temp', 'bower', 'build_temp', 'browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  let _watchable = [];

  _watchable.push(INDEX_HTML);
  _watchable.push(JS);
  _watchable.push(LESS);
  _watchable.push(IMAGES);
  _watchable.push(PARTIALS);
  _watchable.push(FONTS);
  _watchable.push(BOWER);
  _watchable.push(ES6);

  return gulp.watch(_watchable, ['bower', 'build_temp', 'browser_sync']);
});
