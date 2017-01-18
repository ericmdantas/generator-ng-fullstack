import gulp from "gulp";
import tsc from "gulp-typescript";
import {base, tasks} from "./const";

const TS_CONFIG = base.ROOT + "tsconfig.json";

gulp.task(tasks.CLIENT_BUILD_TS, () => {
  let _tsProject = tsc.createProject(TS_CONFIG);

  return _tsProject.src()
                   .pipe(_tsProject())
                   .js
                   .pipe(gulp.dest("."));
});
