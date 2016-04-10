package static

import (
	"github.com/labstack/echo"
)

const (
	devsatic   string = "client/dev"
	diststatic string = "client/dist"
)

func Init(e *echo.Echo) {
	e.Get("/", echo.Static(""))
	e.Get("/client/dev", echo.Static(devsatic))
}
