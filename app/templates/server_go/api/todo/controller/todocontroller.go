package todocontroller

import (
	"encoding/json"
	"github.com/<%= username %>/<%= appName %>/server/api/todo/dao"
	todo "github.com/<%= username %>/<%= appName %>/server/api/todo/model"
	"github.com/labstack/echo"
	"io/ioutil"
	"net/http"
)

func GetAll(c echo.Context) error {
	ts, _ := tododao.All()

	c.JSON(http.StatusOK, ts)

	return nil
}

func NewTodo(c echo.Context) error {
	t := new(todo.Todo)

	c.Bind(t)

	nt, _ := tododao.NewTodo(*t)

	c.JSON(http.StatusOK, nt)

	return nil
}

func RemoveTodo(c echo.Context) error {
	id := c.Param("id")

	tododao.DeleteTodo(id)

	c.String(http.StatusOK, "")

	return nil
}
