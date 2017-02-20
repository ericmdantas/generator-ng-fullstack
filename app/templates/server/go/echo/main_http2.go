package main

import (
	"fmt"
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/routes"
	"github.com/labstack/echo"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	e := echo.New()

	routes.Init(e)

	err := e.StartTLS(port, "server/cert/server.crt", "server/cert/server.key")

	if err != nil {
		panic(err)
	}
}
