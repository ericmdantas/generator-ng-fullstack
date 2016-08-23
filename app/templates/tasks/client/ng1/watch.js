import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_RELOAD, () => {
  return browserSync.reload();
});

gulp.task(tasks.CLIENT_WATCH, () => {
  <% if (!!secure) { %>
  browserSync({
    proxy: "https://localhost:3333", 
    reloadDelay: 1000
  });
  <%} else {%>
  browserSync({
    proxy: "http://localhost:3333", 
    reloadDelay: 1000
  });
  <% } %>
  let _watchable = [];

  _watchable.push(path.DEV + '**/*.js');
  _watchable.push(path.DEV + '**/*.css');
  _watchable.push(path.DEV + '**/*.html');
  <% if (stylePreprocessor === "less") { %>
  _watchable.push(path.DEV + '**/*.less');
  <% } %>
  <% if (stylePreprocessor === "sass") { %>
  _watchable.push(path.DEV + '**/*.sass');
  <% } %>

  return gulp.watch(_watchable, [
    tasks.CLIENT_RELOAD,
    <% if (!!stylePreprocessor) { %>
    tasks.CLIENT_COMPILE_TO_CSS
    <% } %>
  ]);
})