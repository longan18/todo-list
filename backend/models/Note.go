package models

type File struct {
	Name string
	Size int64
	Path string
}

type Note struct {
	Name      string   `form:"name"`
	Note      string   `form:"note"`
	StartTime string   `form:"start_time"`
	EndTime   string   `form:"end_time"`
	Required  []string `form:"required[]"`
}
