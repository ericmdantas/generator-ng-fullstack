package <%= nameLowerCase %>controller

import (
	_ "encoding/json"
	_ "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/dao"
	_ <%= nameLowerCase %> "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/model"
	"gopkg.in/labstack/echo.v2"
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
