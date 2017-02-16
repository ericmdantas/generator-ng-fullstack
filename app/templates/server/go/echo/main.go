package main

import (
	"fmt"
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/routes"
	"gopkg.in/labstack/echo.v3"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	e := echo.New()

	routes.Init(e)

	err := e.Start(port)

	if err != nil {
		panic(err)
	}
}
