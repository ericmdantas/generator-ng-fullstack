import gulp from 'gulp';

gulp.task('client.build_dist', [
  'client.del_dist',
  'client.test_client',
  'client.views:dist',
  'client.imgs:dist',
  'client.fonts:dist',
  'client.build_ts:dist'
]); // dist build
