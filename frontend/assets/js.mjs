import FETCH from "./fetch.mjs";

$(function() {
	$("#js-form-note").on("submit", function(e) {
		e.preventDefault();

		FETCH.addNote(this);
	})
})