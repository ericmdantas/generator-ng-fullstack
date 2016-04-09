package static

import (
	"github.com/labstack/echo"
)

const (
	devsatic   string = "client/dev"
	diststatic string = "client/dist"
)

func Init(e *echo.Echo) {
	e.Use(echo.Static(""))
	e.Use(echo.Static(devsatic))
}
