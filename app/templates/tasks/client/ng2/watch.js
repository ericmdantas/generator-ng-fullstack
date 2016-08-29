import gulp from 'gulp';
import browserSync from 'browser-sync';
import {base, tasks} from './const';

gulp.task(tasks.CLIENT_RELOAD, () => {
  return browserSync.reload();
});

gulp.task(tasks.CLIENT_WATCH, [tasks.CLIENT_BUILD_TS, <% if (!!stylePreprocessor) { %> tasks.CLIENT_COMPILE_TO_CSS <% } %>], () => {
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

  _watchable.push(base.DEV + '**/.ts');
  _watchable.push(base.DEV + '**/*.css');
  _watchable.push(base.DEV + '**/*.html');
  <% if (stylePreprocessor === "less") { %>
  _watchable.push(base.DEV + '**/*.less');
  <% } %>
  <% if (stylePreprocessor === "sass") { %>
  _watchable.push(base.DEV + '**/*.sass');
  <% } %>

  return gulp.watch(_watchable, [
    tasks.CLIENT_BUILD_TS, 
    <% if (!!stylePreprocessor) { %>
    tasks.CLIENT_COMPILE_TO_CSS,
    <% } %>
    tasks.CLIENT_RELOAD,
  ]);
});
