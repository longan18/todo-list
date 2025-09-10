import STATUS from "./constants.mjs";
import ELM from "./element.mjs";
import FETCH from "./fetch.mjs";

$(function() {
	getList();

	$("#js-form-note").on("submit", async function(e) {
		e.preventDefault();

		const { data } = await FETCH.addNote(this);

		if (data.id != undefined) {
			const { note } = await FETCH.getNote(data.id);
			ELM.addRowTable(note);
		}
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
})

const getList = async () => {
	const { list } = await FETCH.getList()

	$.map(list, function(v, i) {
		ELM.addRowTable(v);
	});
}