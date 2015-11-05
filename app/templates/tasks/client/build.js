import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import less from 'gulp-less';
import coveralls from 'gulp-coveralls';
import browserSync from 'browser-sync';

const DEV_DIR = './client/dev/';
const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

const IMAGES = DEV_DIR + 'imgs/*';
const FONTS = DEV_DIR + 'fonts/*';
const PARTIALS = DEV_DIR + 'partials/**/*';
const INDEX_HTML = DEV_DIR + 'index.html';
const COMPONENTS = DEV_DIR + 'components/';

gulp.task('client.components:temp', () => {
  return gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(TEMP_DIR + 'components/'));
});

gulp.task('client.components:dist', () => {
  gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(DIST_DIR + 'components/'));

  gulp
    .src(COMPONENTS + '**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR + 'components/'));
});

gulp.task('client.html,css,js:temp', () => {
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
    .pipe(gulp.dest(TEMP_DIR));
});

gulp.task('client.partials:temp', () => {
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
});

gulp.task('client.imgs:temp', () => {
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
});

gulp.task('client.fonts:temp', () => {
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
});

gulp.task('client.html,css,js:dist', () => {
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
});

gulp.task('client.fonts:dist', () => {
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(DIST_DIR + 'fonts/'));
});

gulp.task('client.partials:dist', () => {
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(DIST_DIR + 'partials/'));
});

gulp.task('client.imgs:dist', () => {
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
});

gulp.task('client.browser_sync', () => {
  return browserSync.reload();
});

gulp.task('client.build', ['del_dist', 'test_client', 'inject:css:index', 'inject:js:index', 'partials:dist', 'imgs:dist', 'fonts:dist', 'html,css,js:dist', 'components:dist']); // dist build
gulp.task('client.build_temp', ['del_temp', 'inject:css:index', 'inject:js:index', 'partials:temp', 'imgs:temp', 'fonts:temp', 'html,css,js:temp', 'components:temp']); // browser-sync build
