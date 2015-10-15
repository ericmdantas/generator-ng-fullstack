const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const less = require('gulp-less');
const coveralls = require('gulp-coveralls');
const browserSync = require('browser-sync');

const DEV_DIR = './client/dev/';
const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

const IMAGES = DEV_DIR + 'imgs/*';
const FONTS = DEV_DIR + 'fonts/*';
const PARTIALS = DEV_DIR + 'partials/**/*';
const INDEX_HTML = DEV_DIR + 'index.html';
const COMPONENTS = DEV_DIR + 'components/';

gulp.task('components:temp', () => {
  return gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(TEMP_DIR + 'components/'));
})

gulp.task('components:dist', () => {
  gulp
    .src(COMPONENTS + '**/*')
    .pipe(gulp.dest(DIST_DIR + 'components/'));

  gulp
    .src(COMPONENTS + '**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR + 'components/'));
})

gulp.task('html,css,js:temp', () => {
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
    .pipe(gulp.dest(TEMP_DIR));
})

gulp.task('partials:temp', () => {
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
})

gulp.task('imgs:temp', () => {
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
})

gulp.task('fonts:temp', () => {
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
})

gulp.task('html,css,js:dist', () => {
  return gulp
    .src(INDEX_HTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
})

gulp.task('fonts:dist', () => {
  return gulp
    .src(FONTS)
    .pipe(gulp.dest(DIST_DIR + 'fonts/'));
})

gulp.task('partials:dist', () => {
  return gulp
    .src(PARTIALS)
    .pipe(gulp.dest(DIST_DIR + 'partials/'));
})

gulp.task('imgs:dist', () => {
  return gulp
    .src(IMAGES)
    .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
})

gulp.task('browser_sync', () => {
  return browserSync.reload();
})

gulp.task('build', ['del_dist', 'test_client', 'inject:css:index', 'inject:js:index', 'partials:dist', 'imgs:dist', 'fonts:dist', 'html,css,js:dist', 'components:dist']); // dist build
gulp.task('build_temp', ['del_temp', 'inject:css:index', 'inject:js:index', 'partials:temp', 'imgs:temp', 'fonts:temp', 'html,css,js:temp', 'components:temp']); // browser-sync build

gulp.task('del_temp', () => {
  return del.sync([TEMP_DIR]);
})

gulp.task('del_dist', () => {
  return del.sync([DIST_DIR]);
})

gulp.task('test_client', (done) => {
  return karma
    .start({
      configFile: __dirname + '/karma.conf.js',
      browsers: ['PhantomJS'],
      singleRun: true
    }, done);
})

gulp.task('coverage_frontend', ['test_client'], () => {
  return gulp
    .src('unit_coverage/**/lcov.info')
    .pipe(coveralls());
})

gulp.task('default', ['build_temp', 'watch']);
