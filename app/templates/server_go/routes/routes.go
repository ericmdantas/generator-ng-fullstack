package routes

import (
	"github.com/ericmdantas/stuff/go_pro/server/api/todo/routes"
	"github.com/ericmdantas/stuff/go_pro/server/common/static"
	"github.com/julienschmidt/httprouter"
)

func Init(router *httprouter.Router) {
	todoroutes.Init(router)
	static.Init(router)
}
