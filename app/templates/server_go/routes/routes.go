package routes

import (
	"github.com/<%= username %>/<%= appName %>/server/api/todo/routes"
	"github.com/<%= username %>/<%= appName %>/server/common/static"
	"github.com/julienschmidt/httprouter"
)

func Init(router *httprouter.Router) {
	todoroutes.Init(router)
	static.Init(router)
}
