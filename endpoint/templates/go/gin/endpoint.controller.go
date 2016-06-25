package <%= nameLowerCase %>controller

import (
	_ "encoding/json"
	_ "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/dao"
	_ <%= nameLowerCase %> "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/model"
	"github.com/gin-gonic/gin"
	_ "io/ioutil"
	_ "net/http"
)

func GetAll(c *gin.Context) {
}

func GetById(c *gin.Context) {
}

func New(c *gin.Context) {
}

func Update(c *gin.Context) {
}

func Remove(c *gin.Context) {
}
