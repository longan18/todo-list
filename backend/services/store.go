package services

import (
	"fmt"
	"log"
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

		form, err := ctx.MultipartForm()
		if err != nil {
			ctx.JSON(constants.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
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
				ctx.JSON(constants.StatusBadRequest, gin.H{
					"error": err.Error(),
				})

				return
			}
		}

		log.Println(note)

		ctx.JSON(constants.StatusOK, gin.H{
			"note": note,
		})
	}
}
