export const path = {
  ROOT: './',
  DEV: './client/dev/',
  DIST: './client/dist/'
}

export const tasks = {
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_BUILD_CSS_DIST: 'client.build_css:dist',
  CLIENT_BUILD_JS_DIST: 'client.build_js:dist',
  CLIENT_DEL_DIST: 'client.del:dist',

  CLIENT_COPY: 'client.copy',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_WATCH: 'client.watch',

  CLIENT_RELOAD: 'client.reload',

  CLIENT_BUILD_DIST: 'client.build:dist'
}
