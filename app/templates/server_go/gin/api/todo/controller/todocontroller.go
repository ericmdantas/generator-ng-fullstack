package todocontroller

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/dao"
	todo "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/model"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetAll(c *gin.Context) error {
	ts, _ := tododao.All()

	return c.JSON(http.StatusOK, ts)
}

func NewTodo(c *gin.Context) error {
	t := new(todo.Todo)

	c.Bind(t)

	nt, _ := tododao.NewTodo(*t)

	return c.JSON(http.StatusOK, nt)
}

func RemoveTodo(c *gin.Context) error {
	id := c.Param("id")

	tododao.DeleteTodo(id)

	return c.String(http.StatusOK, "")
}
