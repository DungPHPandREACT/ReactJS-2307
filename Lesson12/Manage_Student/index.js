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

function renderData(data = []) {
	// In thông tin học sinh ra
	let stringHTML = '';

	for (let i = 0; i < data.length; i++) {
		stringHTML += `
    <tr>
		<td scope="col">${data[i].id}</td>
		<td scope="col">${data[i].name}</td>
		<td scope="col">${data[i].age}</td>
		<td scope="col">${data[i].gender}</td>
		<td scope="col">${data[i].point}</td>
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
}

// function clear input
function clearInput() {
	document.getElementById('id').value = '';
	document.getElementById('name').value = '';
	document.getElementById('age').value = '';
	document.getElementById('gender').value = '';
	document.getElementById('point').value = '';
}

// Add student
// Bước 1: Gán sự kiện on click cho button "Add student"
document.getElementById('btn-add').onclick = function () {
	// Bước 2: Trong hàm xử lý sự kiện
	// -Lấy được dữ liệu người dùng đang nhập ở input
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const point = document.getElementById('point').value;
	// -Tạo 1 object mới chứa các thông tin vừa lấy được, push vào mảng
	const newStudent = {
		id: id,
		name: name,
		age: age,
		gender: gender,
		point: point,
	};
	listStudent.push(newStudent);
	clearInput();
	renderData(listStudent);
	// -
};

// Delete student
// Bước 1: Gán sự kiện onclick cho các button delete
// Bước 2: Trong hàm xử lý sự kiện
// -Lấy được id của học sinh đang được click
// -Tìm vị trí index của học sinh đó trong listStudent
// -Xóa học sinh đó trong mảng listStudent

// Khi reload lại trang web, dữ liệu không bị mất

renderData(listStudent);
