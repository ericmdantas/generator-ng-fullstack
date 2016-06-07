package todocontroller

import (
	"<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/dao"
	todo "<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/model"
	"github.com/labstack/echo"
	"net/http"
)

func GetAll(c echo.Context) error {
	ts, _ := tododao.All()

	return c.JSON(http.StatusOK, ts)
}

func NewTodo(c echo.Context) error {
	t := new(todo.Todo)

	c.Bind(t)

	nt, _ := tododao.NewTodo(*t)

	return c.JSON(http.StatusOK, nt)
}

func RemoveTodo(c echo.Context) error {
	id := c.Param("id")

	tododao.DeleteTodo(id)

	return c.String(http.StatusOK, "")
}
