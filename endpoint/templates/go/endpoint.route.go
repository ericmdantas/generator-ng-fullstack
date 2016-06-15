package <%= nameLowerCase %>routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/controller"
	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	e.Get("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.GetAll)
	e.Get("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.GetById)
	e.Post("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.New)
	e.Put("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Update)
	e.Delete("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Remove)
}
