import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import {path, tasks} from './const';
<% if (stylePreprocessor === "less") { %>
import less from 'gulp-less';
<% } %>
<% if (stylePreprocessor === "sass") { %>
  import sass from 'gulp-sass';
<% } %>

const CSS = path.DIST + '**/*.css';
<% if (stylePreprocessor === "less") { %>
const LESS = path.DEV + '**/*.less';
<% } %>
<% if (stylePreprocessor === "sass") { %>
const SASS = path.DEV + '**/*.sass';
<% } %>

<% if (!!stylePreprocessor) { %>
  gulp.task(tasks.CLIENT_COMPILE_TO_CSS, () => {
    <% if (stylePreprocessor === "less") { %>
    return gulp.src(LESS)
               .pipe(less({
                 paths: [ path.join(__dirname, 'less', 'includes') ]
               }))
               .pipe(gulp.dest('.'));
    <% } %>
    <% if (stylePreprocessor === "sass") { %>
    return gulp.src(SASS)
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('.'));
      });
    <% } %>
  });
<% } %>

gulp.task(tasks.CLIENT_BUILD_CSS_DIST, () => {
  return gulp.src(CSS, {base: path.DIST})
             .pipe(cssmin())
             .pipe(gulp.dest(path.DIST));
});