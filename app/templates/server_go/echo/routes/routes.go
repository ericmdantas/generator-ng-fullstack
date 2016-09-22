package routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/route"
	<% if (!differentStaticServer) {%>
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Pre(middleware.RemoveTrailingSlash())
	<% if (!differentStaticServer) {%>
	static.Init(e)
	<% } %>
	todoroute.Init(e)
}
