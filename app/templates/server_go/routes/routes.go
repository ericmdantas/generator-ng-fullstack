package routes

import (
	"compress/gzip"
	"github.com/<%= username %>/<%= appName %>/server/api/todo/routes"
	<% if (!differentStaticServer) {%>
	"github.com/<%= username %>/<%= appName %>/server/common/static"
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
	todoroutes.Init(e)
}
