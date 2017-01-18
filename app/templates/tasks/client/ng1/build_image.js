import gulp from "gulp";
import imageMin from "gulp-imagemin";
import {base, tasks} from "./const";

const IMAGES = [
	base.DIST + "**/*.{png,jpg,jpeg,gif}",
	"!" + base.DIST + "bower_components/**/*.{png,jpg,jpeg,gif}",
];

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES, {base: base.DIST})
			       .pipe(imageMin())
             .pipe(gulp.dest(base.DIST));
});
