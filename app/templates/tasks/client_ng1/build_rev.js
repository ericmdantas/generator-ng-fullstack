import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssmin from 'gulp-minify-css';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import {path} from './const';

const INDEX_HTML = path.DEV + 'index.html';

gulp.task('client.rev:dist', () => {
  return gulp.src(INDEX_HTML)
             .pipe(usemin({
               js0: [rev(), uglify()],
               js1: [rev(), uglify()],
               css0: [cssmin(), rev()]})
             )
             .pipe(gulp.dest(path.DIST));
});
