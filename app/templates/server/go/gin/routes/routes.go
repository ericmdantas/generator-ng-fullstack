package routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/route"
	<% if (!differentStaticServer) {%>
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"github.com/gin-gonic/gin"
)

func Init(r *gin.RouterGroup) {
	<% if (!differentStaticServer) {%>
	static.Init(r)
	<% } %>
	todoroute.Init(r)
}
