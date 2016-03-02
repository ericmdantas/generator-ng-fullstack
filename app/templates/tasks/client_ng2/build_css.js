import gulp from 'gulp';
import cssmin from 'gulp-minify-css';
import rev from 'gulp-rev';
import tsc from 'gulp-typescript';
import {path, tasks} from './const';

const CSS = path.DEV + '**/*.css';

gulp.task(tasks.CLIENT_CSS_DIST, () => {
  return gulp.src(CSS, {base: path.DEV})
             .pipe(cssmin())
             .pipe(rev())
             .pipe(gulp.dest(path.DIST));
});
