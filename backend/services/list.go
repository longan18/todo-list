package services

import (
	"todo-list/constants"
	"todo-list/models"

	"github.com/gin-gonic/gin"
)

func ListNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		listNote := models.GetList()

		ctx.JSON(constants.StatusOK, gin.H{
			"data": listNote,
		})
	}
}

func GetNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		id := ctx.Param("id")

		listNote := models.GetList()

		_, exists := listNote[id]

		if !exists {
			ctx.JSON(constants.StatusBadGateway, gin.H{
				"message": "Note exists",
			})
		}

		note := listNote[id]

		ctx.JSON(constants.StatusOK, gin.H{
			"note": note,
		})
	}
}
