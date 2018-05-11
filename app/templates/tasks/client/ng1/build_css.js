import gulp from "gulp"
import cssmin from "gulp-clean-css"
import {join} from "path"
import {base, tasks} from "./const"
<% if (stylePreprocessor === "less") { %>
import less from "gulp-less"
<% } %>
<% if (stylePreprocessor === "sass") { %>
import sass from "gulp-sass"
<% } %>

const CSS = [
  base.DIST + "**/*.css"
]
<% if (stylePreprocessor === "less") { %>
const LESS = [
  base.DEV + "**/*.less"
]
<% } %>
<% if (stylePreprocessor === "sass") { %>
const SASS = [
  base.DEV + "**/*.{sass,scss}"
]
<% } %>

<% if (!!stylePreprocessor) { %>
gulp.task(tasks.CLIENT_COMPILE_TO_CSS, (done) => {
  <% if (stylePreprocessor === "less") { %>
  return gulp.src(LESS)
             .pipe(less())
             .on("error", (err) => {
                console.log(err)
             })
             .pipe(gulp.dest(base.DEV))
             .on('end', () => done())
  <% } %>
  <% if (stylePreprocessor === "sass") { %>
  return gulp.src(SASS)
             .pipe(sass())
             .on("error", sass.logError)
             .pipe(gulp.dest(base.DEV))
             .on('end', () => done())
  <% } %>
})
<% } %>

gulp.task(tasks.CLIENT_BUILD_CSS_DIST, (done) => {
  return gulp.src(CSS, {base: base.DIST})
             .pipe(cssmin())
             .pipe(gulp.dest(base.DIST))
             .on('end', () => done())
})