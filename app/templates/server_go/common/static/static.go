package static

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"os"
)

const (
	devsatic   string = "../client/__tmp/"
	diststatic string = "../client/dist/"
)

func Init(router *httprouter.Router) {

	router.NotFound = http.FileServer(http.Dir(devsatic)).ServeHTTP

	env := os.Getenv("production")

	if env != "" {
		router.NotFound = http.FileServer(http.Dir(diststatic)).ServeHTTP
	}
}
