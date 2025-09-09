import NOTE from "./routes.mjs"

const METHOD_POST = "POST"

const AJAX = {
	addNote: async (form) => {
		const formData = new FormData(form);

		await fetch(NOTE.addNote, {
			method: METHOD_POST,
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}
}

export default AJAX