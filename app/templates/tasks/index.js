<% if (!serverOnly) {%>
import gulp from "gulp";
import {tasks} from "./client/const";

gulp.task("default", [tasks.CLIENT_WATCH]);

require("require-dir")("client");
<% } %>
<% if (nodeServer) {%>
require("require-dir")("server");
<% } %>
