import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import {path, tasks} from './const';

const VIEWS = path.DIST + '**/*.html';

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
  return gulp.src(VIEWS, {base: path.DIST})
             .pipe(rev())
			       .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest(path.DIST));
});
