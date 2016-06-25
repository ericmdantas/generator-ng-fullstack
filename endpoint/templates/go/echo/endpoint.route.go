package <%= nameLowerCase %>routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/controller"
	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	e.GET("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.GetAll)
	e.GET("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.GetById)
	e.POST("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.New)
	e.POST("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Update)
	e.DELETE("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Remove)
}
