import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import {path, tasks} from './const';

const VIEWS = path.DEV + '**/*.html';

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
  return gulp.src(VIEWS, {base: path.DEV})
             .pipe(rev())
			       .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest(path.DIST));
});
