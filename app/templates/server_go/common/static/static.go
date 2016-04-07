package static

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

const (
	devsatic   string = "../client/dev/"
	diststatic string = "../client/dist/"
)

func Init(e *echo.Echo) {
	e.Use(middleware.Static(""))
	e.Use(middleware.Static(devsatic))
}
