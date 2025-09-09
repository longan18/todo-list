const ELM = {
	elmRowTable: (item) => {
		return `<tr id="item-${item.id}">
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.name}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.note}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.fileUpload}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.required}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.startTime}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">${item.endTime}</p>
			</td>
			<td class="p-4 border-b border-blue-gray-50">
				<p class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
			</td>
		</tr>`
	}
}

export default ELM