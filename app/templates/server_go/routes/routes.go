package routes

import (
	"github.com/<%= username %>/<%= appName %>/server/api/todo/routes"
	"github.com/<%= username %>/<%= appName %>/server/common/static"
	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	todoroutes.Init(e)
	static.Init(e)
}
