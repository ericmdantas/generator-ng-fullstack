package static

import (
	"net/http"
	"os"

	"github.com/julienschmidt/httprouter"
)

const (
	devsatic   string = "../client/dev/"
	diststatic string = "../client/dist/"
)

func Init(router *httprouter.Router) {

	router.NotFound = http.FileServer(http.Dir(devsatic)).ServeHTTP

	env := os.Getenv("production")

	if env != "" {
		router.NotFound = http.FileServer(http.Dir(diststatic)).ServeHTTP
	}
}
