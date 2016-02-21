import gulp from 'gulp';

gulp.task('client.build_dist', [
  'client.del_dist',
  'client.unit_test',
  'client.views:dist',
  'client.imgs:dist',
  'client.fonts:dist',
  'client.rev:dist'
]); // dist build
