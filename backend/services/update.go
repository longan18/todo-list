package services

import (
	"todo-list/constants"
	"todo-list/models"

	"github.com/gin-gonic/gin"
)

func UpdateNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		id := ctx.Param("id")

		listNote := models.GetList()

		_, exists := listNote[id]

		if !exists {
			ctx.JSON(constants.StatusBadGateway, gin.H{
				"message": "Note exists",
			})
		}

		var note models.Note

		if err := ctx.ShouldBind(&note); err != nil {
			ctx.JSON(constants.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		if err := uploadFile(ctx); err != nil {
			ctx.JSON(constants.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		note.SetFile(listFile)
		note.ID = id
		models.Update(id, note)

		ctx.JSON(constants.StatusOK, gin.H{
			"message": "Update success",
		})
	}
}
