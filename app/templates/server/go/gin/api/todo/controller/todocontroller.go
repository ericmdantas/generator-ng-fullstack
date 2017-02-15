package todocontroller

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/dao"
	todo "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/model"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetAll(c *gin.Context) {
	ts, _ := tododao.All()

	c.JSON(http.StatusOK, ts)
}

func GetById(c *gin.Context) {
	id := c.Param("id")

	nt, _ := tododao.GetById(id)

	c.JSON(http.StatusOK, nt)
}

func NewTodo(c *gin.Context) {
	t := new(todo.Todo)

	c.Bind(t)

	nt, _ := tododao.NewTodo(*t)

	c.JSON(http.StatusOK, nt)
}

func RemoveTodo(c *gin.Context) {
	id := c.Param("id")

	tododao.DeleteTodo(id)

	c.String(http.StatusOK, "")
}
