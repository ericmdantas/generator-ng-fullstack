package <%= nameLowerCase %>routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/controller"
	"github.com/gin-gonic/gin"
)

func Init(r *gin.RouterGroup) {
	r.GET("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.GetAll)
	r.GET("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.GetById)
	r.POST("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.New)
	r.PUT("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Update)
	r.DELETE("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Remove)
}
