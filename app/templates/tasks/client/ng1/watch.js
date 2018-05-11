import gulp from "gulp"
import {tasks} from "./const"
import Server from "aliv"

const aliv = new Server({
  root: process.cwd()
});

gulp.task(tasks.CLIENT_WATCH, () => {
  return new Promise((res, rej) => {
    aliv.start()
    return res()
  })
})
