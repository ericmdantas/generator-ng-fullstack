package routes

import (
	"compress/gzip"
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/route"
	<% if (!differentStaticServer) {%>
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Pre(middleware.RemoveTrailingSlash())
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: gzip.BestCompression,
	})	
	<% if (!differentStaticServer) {%>
	static.Init(e)
	<% } %>
	todoroute.Init(e)
}
