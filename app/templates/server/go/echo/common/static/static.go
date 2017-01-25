package static

import (
	"os"

	"gopkg.in/labstack/echo.v3"
	"gopkg.in/labstack/echo.v3/middleware"
)

func Init(e *echo.Echo) {
	e.Use(middleware.Static("node_modules"))
	e.Use(middleware.Static("jspm_packages"))

	if env := os.Getenv("GO_ENV"); env == "" {
		e.Use(middleware.Static("client/dev"))
	} else {
		e.Use(middleware.Static("client/dist"))
	}
}
