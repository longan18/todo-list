package main

import (
	"github.com/gin-gonic/gin"
)

func ServeStatic(router *gin.Engine) {
	// Serve static files from frontend directory
	router.Static("/assets", "../frontend/assets")
	
	// Serve index.html for root path
	router.StaticFile("/", "../frontend/index.html")
	
	// Serve favicon.ico
	router.StaticFile("/favicon.ico", "../frontend/assets/favicon.ico")
	
	// Handle 404 - redirect to index.html
	router.NoRoute(func(c *gin.Context) {
		c.File("../frontend/index.html")
	})
}