package todoroute

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/controller"
	"gopkg.in/gin-gonic/gin.v1"
)

func Init(r *echo.Echo) {
	r.GET("/api/todos", todocontroller.GetAll)
	r.GET("/api/todos/:id", todocontroller.GetById)
	r.POST("/api/todos", todocontroller.NewTodo)
	r.DELETE("/api/todos/:id", todocontroller.RemoveTodo)
}
