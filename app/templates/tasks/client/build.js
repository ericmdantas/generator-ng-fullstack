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
const VIEWS = DEV_DIR + 'views/**/*';
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

gulp.task('client.views:temp', () => {
  return gulp
    .src(VIEWS)
    .pipe(gulp.dest(TEMP_DIR + 'views/'));
})

gulp.task('client.views:dist', () => {
  return gulp
    .src(VIEWS)
    .pipe(gulp.dest(DIST_DIR + 'views/'));
})

gulp.task('client.build', ['client.del_dist', 'client.test_client', 'client.partials:dist', 'client.views:dist', 'client.imgs:dist', 'client.fonts:dist', 'client.html,css,js:dist', 'client.components:dist']); // dist build
gulp.task('client.build_temp', ['client.del_temp', 'client.partials:temp', 'client.views:temp', 'client.imgs:temp', 'client.fonts:temp', 'client.html,css,js:temp', 'client.components:temp']); // browser-sync build
