package main

import (
	"fmt"
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/routes"
	"gopkg.in/gin-gonic/gin.v1"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	r := gin.Default()

	routes.Init(r)

	r.RunTLS(port, "server/cert/server.crt", "server/cert/server.key")
}
