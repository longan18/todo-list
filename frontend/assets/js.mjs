import AJAX from "./ajax.mjs";

$(function() {
	$("#js-form-note").on("submit", function(e) {
		e.preventDefault();

		AJAX.addNote(this);
	})
})