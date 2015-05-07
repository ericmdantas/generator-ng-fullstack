package <%= nameLowerCase %>routes

import (
	"github.com/<%= username %>/<%= appName %>/server/api/<%= nameLowerCase %>/controller"
	"github.com/julienschmidt/httprouter"
)

func Init(router *httprouter.Router) {
	router.GET("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.GetAll)
	router.GET("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.GetById)
	router.POST("/api/<%= nameLowerCase %>", <%= nameLowerCase %>controller.New)
	router.PUT("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Update)
	router.DELETE("/api/<%= nameLowerCase %>/:id", <%= nameLowerCase %>controller.Remove)
}
