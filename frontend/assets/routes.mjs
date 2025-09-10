const ROUTE = {
	listNote: "http://localhost:8080/v1/note",
	addNote: "http://localhost:8080/v1/note/store",
	getNote: (id) => { return "http://localhost:8080/v1/note/" + id },
	deleteNote: (id) => { return "http://localhost:8080/v1/note/" + id + "/delete"}
}

export default ROUTE