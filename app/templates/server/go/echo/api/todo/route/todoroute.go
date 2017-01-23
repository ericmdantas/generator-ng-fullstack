package todoroute

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/controller"
	"gopkg.in/labstack/echo.v2"
)

func Init(e *echo.Echo) {
	e.GET("/api/todos", todocontroller.GetAll)
	e.GET("/api/todos/:id", todocontroller.GetById)
	e.POST("/api/todos", todocontroller.NewTodo)
	e.DELETE("/api/todos/:id", todocontroller.RemoveTodo)
}
