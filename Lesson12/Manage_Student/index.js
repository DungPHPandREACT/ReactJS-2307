const listStudent = [
	{
		id: 1,
		name: 'Nguyễn Văn A',
		age: 15,
		gender: 'boy',
		point: 10,
	},
	{
		id: 2,
		name: 'Trần Thị B',
		age: 15,
		gender: 'girl',
		point: 5,
	},
	{
		id: 3,
		name: 'Binz',
		age: 15,
		gender: 'girl',
		point: 7,
	},
	{
		id: 4,
		name: 'ABC',
		age: 15,
		gender: 'girl',
		point: 10,
	},
];

let stringHTML = '';

for (let i = 0; i < listStudent.length; i++) {
	stringHTML += `
    <tr>
		<td scope="col">${listStudent[i].id}</td>
		<td scope="col">${listStudent[i].name}</td>
		<td scope="col">${listStudent[i].age}</td>
		<td scope="col">${listStudent[i].gender}</td>
		<td scope="col">${listStudent[i].point}</td>
		<td scope="col">
            <div>
                <button class="btn btn-success" style="margin: 0 4px">
                    Update
                </button>
                <button class="btn btn-danger" style="margin: 0 4px">
                    Delete
                </button>
            </div>
		</td>
	</tr>
    `;
}

// console.log(stringHTML);
document.getElementById('data-student').innerHTML = stringHTML;
