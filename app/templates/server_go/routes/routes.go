package routes

import (
	"<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/routes"
	<% if (!differentStaticServer) {%>
	"<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Pre(middleware.RemoveTrailingSlash())
	<% if (!differentStaticServer) {%>
	static.Init(e)
	<% } %>
	todoroutes.Init(e)
}
