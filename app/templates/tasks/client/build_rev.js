import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import less from 'gulp-less';
import {path} from './const';

const INDEX_HTML = path.DEV + 'index.html';

gulp.task('client.rev:temp', () => {
  return gulp.src(INDEX_HTML)
             .pipe(usemin({
                 js0: [rev()],
                 js1: [rev()],
                 css0: [rev(), less()]
               }))
             .pipe(gulp.dest(path.TMP));
});

gulp.task('client.rev:dist', () => {
  return gulp.src(INDEX_HTML)
             .pipe(usemin({
               js0: [rev(), uglify()],
               js1: [rev(), uglify()],
               css0: [cssmin(), rev(), less()]})
             )
             .pipe(gulp.dest(path.DIST));
});
