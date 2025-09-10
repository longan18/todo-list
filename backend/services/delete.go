package services

import (
	"todo-list/constants"
	"todo-list/models"

	"github.com/gin-gonic/gin"
)

func DeleteNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		id := ctx.Param("id")

		listNote := models.GetList()

		_, exists := listNote[id]

		if !exists {
			ctx.JSON(constants.StatusBadGateway, gin.H{
				"message": "Note exists",
			})
		}

		delete(listNote, id)

		ctx.JSON(constants.StatusOK, gin.H{
			"message": "Delete success",
		})
	}
}
