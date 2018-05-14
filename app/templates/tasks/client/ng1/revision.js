import gulp from "gulp"
import usemin from "gulp-usemin"
import rev from "gulp-rev"
import uglifyJs from "gulp-uglify"
import cleanCss from "gulp-clean-css"
import {tasks, base} from "./const"

gulp.task(tasks.CLIENT_REVISION, (done) => {
    return gulp.src(base.DIST + 'index.html', {base: base.DIST})
               .pipe(usemin({
                   libCss: [rev(), cleanCss()],
                   appCss: [rev(), cleanCss()],
                   libJs: [rev(), uglifyJs()],
                   appJs: [rev(), uglifyJs()]
               }))
               .pipe(gulp.dest(base.DIST))
               .on('end', () => done())
})