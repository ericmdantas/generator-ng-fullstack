package routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/route"
	<% if (!differentStaticServer) {%>
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"gopkg.in/gin-gonic/gin.v1"
)

func Init(r *gin.Engine) {
	<% if (!differentStaticServer) {%>
	static.Init(r)
	<% } %>
	todoroute.Init(r)
}
