package models

import "github.com/google/uuid"

type File struct {
	ID   string
	Name string
	Size int64
	Path string
}

type Note struct {
	ID        string   `form:"id" json:"id"`
	Name      string   `form:"name" json:"name"`
	Note      string   `form:"note" json:"note"`
	StartTime string   `form:"start_time" json:"start_time"`
	EndTime   string   `form:"end_time" json:"end_time"`
	Requireds []string `form:"required[]" json:"requireds"`
	Files     []File   `json:"files"`
}

var ListNote = make(map[string]Note)

func (n *Note) SetFile(f []File) {
	n.Files = f
}

func (n *Note) SetID() {
	n.ID = uuid.New().String()
}

func (n *File) SetID() {
	n.ID = uuid.New().String()
}

func GetList() map[string]Note {
	return ListNote
}

func Add(n Note) {
	ListNote[n.ID] = n
}

func Update(id string, n Note) {
	ListNote[id] = n
}
