package main

import (
	"todo-list/middlewares"
	"todo-list/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(middlewares.CORSMiddleware())

	// Serve static files
	ServeStatic(router)

	routes.ListRoute(router)

	router.Run(":8090")
}
