package main

import (
	"fmt"
	"github.com/<%= username %>/<%= appName %>/server/routes"
	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/fasthttp"
	"net/http"

	"golang.org/x/net/http2"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	e := echo.New()

	routes.Init(e)

	e.RunTLSServer(fasthttp.New(), "crt/server.crt", "crt/server.key")
}
