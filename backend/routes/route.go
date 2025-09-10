package routes

import (
	"todo-list/constants"
	"todo-list/services"

	"github.com/gin-gonic/gin"
)

func ListRoute(router *gin.Engine) {
	v1 := router.Group("/v1")
	{
		rNote := v1.Group("/note")
		{
			rNote.POST("", services.ListNote())
			rNote.POST("/store", services.StoreNote())
			rNote.POST("/:id", services.GetNote())
			rNote.PUT("/:id/update", services.UpdateNote())
			rNote.DELETE("/:id/delete", services.DeleteNote())
		}
	}

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(constants.StatusOK, gin.H{
			"message": "pong",
		})
	})
}