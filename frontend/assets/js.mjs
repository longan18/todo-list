import AJAX from "./ajax.mjs";

$(function() {
	$("#js-form-note").on("submit", async function(e) {
		e.preventDefault();

		await AJAX.addNote(this);
		console.log(123);

	})
})