package static

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

const (
	dev  string = "client/dev"
	dist string = "client/dist"
)

func Init(e *echo.Echo) {
	e.Use(middleware.Static(""))
	e.Use(middleware.Static(dev))
}
