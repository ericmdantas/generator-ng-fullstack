const gulp = require('gulp');
const babel = require('gulp-babel');

const ES6_PATH = ['**/*.es6', '!node_modules'];

gulp.task('compile:babel', () => {
    return gulp.src(ES6_PATH)
               .pipe(babel({optional: ["es7.decorators"]}))
               .pipe(gulp.dest('.'));
});

gulp.task('watch:es6', () => {
    return gulp.watch(_es6, ['compile:babel']);
});
