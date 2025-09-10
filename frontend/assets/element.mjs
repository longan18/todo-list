const ELM = {
	elmRowTable: (item) => {
		return `<tr id="${item.id}">
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.name}" data-filed="name">${item.name}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.note}" data-filed="note">${item.note}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.files}" data-filed="files">${item.files}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.requireds}" data-filed="required[]">${item.requireds}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.start_time}" data-filed="start_time">${item.start_time}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-map-data block font-sans text-sm antialiased font-normal leading-normal text-black-950" data-value="${item.end_time}" data-filed="end_time">${item.end_time}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-edit-note block font-sans text-sm antialiased font-medium leading-normal text-black-950 cursor-pointer">Edit</a>
				<p class="js-delete-note block font-sans text-sm antialiased font-medium leading-normal text-red-600 cursor-pointer">Delete</a>
			</td>
		</tr>`
	},
	mapFormData: (item) => {
		$("#js-title-form").text("Update note");
		$("#js-back-to-page-register").removeClass("hidden");

		const $elmBtnSubmitForm = $("#js-submit-form");
		$elmBtnSubmitForm.text("Update");
		$elmBtnSubmitForm.attr("data-type-form", "update")

		const $form = $("#js-form-note");
		const $inputCheckbox = $form.find(`input[type="checkbox"][name="required[]"]`)

		item.find(".js-map-data").map((i, elm) => {
			const $elm = $(elm);

			const value = $elm.attr("data-value");
			const filed = $elm.attr("data-filed");

			if (value != "null" && value != "") {
				$form.find(`input[type="text"][name="${filed}"]`).val(value);
				$form.find(`textarea[name="${filed}"]`).val(value);

				if (filed == "required[]") {
					const arrValue = value.split(",");

					$inputCheckbox.map((i, elm) => {
						const valueCheckbox = $(elm).val();

						if (arrValue.includes(valueCheckbox)) {
							$(elm).prop("checked", true)
						} else {
							$(elm).prop("checked", false)
						}
					})
				}
			}
		})
	},
	addRowTable: (item) => {
		const $tbody = $("#js-tbody-tb-list-note")

		$tbody.append(ELM.elmRowTable(item))
	},
	updateRowRowTable: (item) => {
		const $tbody = $("#js-tbody-tb-list-note")
		
		$tbody.find(`#${item.id}`).replaceWith(ELM.elmRowTable(item))
	}
}

export default ELM