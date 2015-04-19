package main

import (
	"fmt"
	"github.com/ericmdantas/stuff/go_pro/server/routes"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func main() {
	fmt.Println("Running main...")

	r := httprouter.New()

	routes.Init(r)

	http.ListenAndServe(":9999", r)
}
