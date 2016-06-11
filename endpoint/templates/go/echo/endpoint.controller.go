package <%= nameLowerCase %>controller

import (
	_ "encoding/json"
	_ "github.com/<%= username %>/<%= appName %>/server/api/<%= feature %>/dao"
	_ <%= nameLowerCase %> "github.com/<%= username %>/<%= appName %>/server/api/<%= feature %>/model"
	"github.com/labstack/echo"
	_ "io/ioutil"
	_ "net/http"
)

func GetAll(c echo.Context) {
}

func GetById(c echo.Context) {
}

func New(c echo.Context) {
}

func Update(c echo.Context) {
}

func Remove(c echo.Context) {
}
