package services

import (
	"todo-list/constants"
	"todo-list/models"

	"github.com/gin-gonic/gin"
)

func UpdateNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var note models.Note

		if err := ctx.ShouldBindJSON(&note); err != nil {
			ctx.JSON(constants.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
		}

		ctx.JSON(constants.StatusOK, gin.H{
			"message": "Update note",
		})
	}
}
