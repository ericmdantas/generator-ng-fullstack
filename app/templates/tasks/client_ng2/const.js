export const path = {
  ROOT: './',
  DEV: './client/dev/',
  DIST: './client/dist/',
  TEST: './tests/'
}

export const tasks = {
  CLIENT_BUILD_DEV: 'client.build:dev',
  CLIENT_BUILD_DIST: 'client.build:dist',

  CLIENT_BUILD_TS_DEV: 'client.build_ts:dev',
  CLIENT_BUILD_TS_DIST: 'client.build_ts:dist',

  CLIENT_CSS_DIST: 'client.build_css:dist',
  CLIENT_JS_DIST: 'client.build_js:dist',
  CLIENT_FONT_DIST: 'client.fonts:dist',
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_DEL_DIST: 'client.del:dist',
  CLIENT_COPY_DEPS_DIST: 'client.copy_deps:dist',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_BROWSER_SYNC: 'client.browser_sync',

  CLIENT_WATCH: 'client.watch'
}
