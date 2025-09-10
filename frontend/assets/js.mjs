import STATUS from "./constants.mjs";
import ELM from "./element.mjs";
import FETCH from "./fetch.mjs";

$(function() {
	let idNoteEdit = '';

	getList();

	$(document).on("click", `#js-submit-form[data-type-form="register"]`, async function(e) {
		e.preventDefault();

		const $form = $("#js-form-note");
		const { data } = await FETCH.addNote($form[0]);

		if (data.id != undefined) {
			const { note } = await FETCH.getNote(data.id);
			ELM.addRowTable(note);
		}

		$($form)[0].reset();
	})

	$(document).on("click", `#js-submit-form[data-type-form="update"]`, async function(e) {
		e.preventDefault();

		console.log(idNoteEdit);

		const $form = $("#js-form-note");
		const status = await FETCH.updateNote($form[0], idNoteEdit);

		if (status == STATUS.STATUS_OK) {
			const { note } = await FETCH.getNote(idNoteEdit);
			console.log(note)
			ELM.updateRowRowTable(note);
		}

		$($form)[0].reset();
	})

	$(document).on("click", ".js-delete-note", async function(e) {
		e.preventDefault();

		const $rowTable = $(this).closest('tr');
		const idNote = $rowTable.attr('id');

		const status = await FETCH.deleteNote(idNote);

		if (status == STATUS.STATUS_OK) {
			$rowTable.remove();
		}
	})

	$(document).on("click", ".js-edit-note", async function(e) {
		e.preventDefault();

		const $rowTable = $(this).closest('tr');
		const idNote = $rowTable.attr('id');

		idNoteEdit = idNote
		ELM.mapFormData($rowTable)
	})

	$("#js-back-to-page-register").on("click", function() {
		$("#js-form-note")[0].reset();
		$("#js-title-form").text("Register note");
		$("#js-back-to-page-register").addClass("hidden");

		const $elmBtnSubmitForm = $("#js-submit-form");
		$elmBtnSubmitForm.text("Register");
		$elmBtnSubmitForm.attr("data-type-form", "register")
	})
})

const getList = async () => {
	const { data } = await FETCH.getList()

	$.map(data, function(v, i) {
		ELM.addRowTable(v);
	});
}