import gulp from "gulp"
import fwdref from "undertaker-forward-reference"

gulp.registry(fwdref())
<% if (!serverOnly) {%>
require("require-dir")("client")
<% } %>
<% if (nodeServer) {%>
require("require-dir")("server")
<% } %>
