package todoroute

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/controller"
	"github.com/gin-gonic/gin"
)

func Init(r *echo.Echo) {
	r.GET("/api/todos", todocontroller.GetAll)
	r.POST("/api/todos", todocontroller.NewTodo)
	r.DELETE("/api/todos/:id", todocontroller.RemoveTodo)
}
