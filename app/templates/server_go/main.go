package main

import (
	"fmt"
	"github.com/<%= username %>/<%= appName %>/server/routes"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	r := httprouter.New()

	routes.Init(r)

	http.ListenAndServe(port, r)
}
