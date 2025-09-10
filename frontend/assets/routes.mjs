const ROUTE = {
	listNote: "http://localhost:8080/v1/note",
	addNote: "http://localhost:8080/v1/note/store",
	updateNote: (id) => { return "http://localhost:8080/v1/note/" + id + "/update"},
	getNote: (id) => { return "http://localhost:8080/v1/note/" + id },
	deleteNote: (id) => { return "http://localhost:8080/v1/note/" + id + "/delete"}
}

export default ROUTE