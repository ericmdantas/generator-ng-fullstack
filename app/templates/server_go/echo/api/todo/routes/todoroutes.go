package todoroutes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/controller"
	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	e.GET("/api/todos", todocontroller.GetAll)
	e.POST("/api/todos", todocontroller.NewTodo)
	e.DELETE("/api/todos/:id", todocontroller.RemoveTodo)
}
