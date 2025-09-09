package services

import (
	"fmt"
	"path/filepath"
	"strconv"
	"time"
	"todo-list/constants"
	"todo-list/models"

	"github.com/gin-gonic/gin"
)

func StoreNote() gin.HandlerFunc {
	return func(ctx *gin.Context) {
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

		ctx.JSON(constants.StatusOK, gin.H{
			"note": note,
		})
	}
}

func uploadFile(ctx *gin.Context) error {
	form, err := ctx.MultipartForm()
	if err != nil {
		return err
	}

	files := form.File["files"]
	for _, file := range files {
		timestamp := strconv.FormatInt(time.Now().UnixNano(), 10)
		ext := filepath.Ext(file.Filename)
		uniqueFilename := fmt.Sprintf("%s_%s%s",
			timestamp,
			filepath.Base(file.Filename[:len(file.Filename)-len(ext)]),
			ext)

		savePath := "./files/" + uniqueFilename

		if err = ctx.SaveUploadedFile(file, savePath); err != nil {
			return err
		}
	}

	return nil
}
