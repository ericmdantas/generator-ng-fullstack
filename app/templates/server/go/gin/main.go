package main

import (
	"fmt"
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/routes"
	"github.com/gin-gonic/gin"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	r := gin.Default()

	routes.Init(r)

	r.Run(port)
}
