package main

import (
	"fmt"
	"github.com/<%= username %>/<%= appName %>/server/routes"
	"github.com/julienschmidt/httprouter"
	"net/http"

	"golang.org/x/net/http2"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	r := httprouter.New()

	routes.Init(r)

	log.Fatal(http.ListenAndServeTLS(port, "crt/server.crt", "crt/server.key", r))
}
