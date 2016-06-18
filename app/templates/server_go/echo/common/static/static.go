package static

import (
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Use(middleware.Static("node_modules"))

	if env := os.Getenv("GO_ENV"); env == "" {
		e.Use(middleware.Static("client/dev"))
	} else {
		e.Use(middleware.Static("client/dist"))
	}
}
