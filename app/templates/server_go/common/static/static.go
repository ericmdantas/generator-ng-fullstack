package static

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Init(router *httprouter.Router) {

	router.NotFound = http.FileServer(http.Dir("../client/__tmp/")).ServeHTTP
}
