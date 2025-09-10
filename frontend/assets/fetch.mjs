import NOTE from "./routes.mjs"

const METHOD_POST = "POST"
const METHOD_DELETE = "DELETE"

const FETCH = {
	addNote: async (form) => {
		const formData = new FormData(form);

		try {
			const response = await fetch(NOTE.addNote, {
				method: METHOD_POST,
				body: formData
			});

			const data = await response.json();

			return data;
		} catch (error) {
			throw error;
		}
	},
	getList: () => {
		fetch(NOTE.listNote, {
			method: METHOD_POST,
		})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	},
	getNote: async (id) => {
		try {
			const response = await fetch(NOTE.getNote(id), {
				method: METHOD_POST,
			});

			const data = await response.json();

			return data;
		} catch (error) {
			throw error;
		}
	},
	deleteNote: async (id) => {
		try {
			const response = await fetch(NOTE.deleteNote(id), {
				method: METHOD_DELETE,
			});

			const status = response.status;

			return status;
		} catch (error) {
			throw error;
		}
	},
}

export default FETCH