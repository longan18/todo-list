const ELM = {
	elmRowTable: (item) => {
		return `<tr id="${item.id}">
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.name}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.note}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.files}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.requireds}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.start_time}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-black-950">${item.end_time}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="js-edit-note block font-sans text-sm antialiased font-medium leading-normal text-black-950 cursor-pointer">Edit</a>
				<p class="js-delete-note block font-sans text-sm antialiased font-medium leading-normal text-red-600 cursor-pointer">Delete</a>
			</td>
		</tr>`
	},
	addRowTable: (item) => {
		const $tbody = $("#js-tbody-tb-list-note")

		$tbody.append(ELM.elmRowTable(item))
	}
}

export default ELM