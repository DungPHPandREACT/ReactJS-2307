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
                <button class="btn btn-success" style="margin: 0 4px" onclick="updateStudent(${data[i].id})">
                    Update
                </button>
                <button class="btn btn-danger" style="margin: 0 4px" onclick="deleteStudent(${data[i].id})">
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
		id,
		name,
		age,
		gender,
		point,
	};
	listStudent.push(newStudent);
	clearInput();
	// In lại listStudent
	renderData(listStudent);
};

// Delete student
// Bước 1: Gán sự kiện onclick cho các button delete
function deleteStudent(id) {
	// Bước 2: Trong hàm xử lý sự kiện
	// -Lấy được id của học sinh đang được click
	// let index = -1;
	// for (let i = 0; i < listStudent.length; i++) {
	// 	if (listStudent[i].id == id) {
	// 		index = i;
	// 		break;
	// 	}
	// }
	// -Tìm vị trí index của học sinh đó trong listStudent
	const index = listStudent.findIndex((student) => student.id == id);
	// -Xóa học sinh đó trong mảng listStudent
	listStudent.splice(index, 1);
	renderData(listStudent);
}

// Update student
// Bước 1: Gán sự kiện onclick cho các button update
function updateStudent(id) {
	// Bước 2: Trong hàm xử lý sự kiện
	// -Lấy được id hoặc full thông tin của học sinh đang được click
	const student = listStudent.find((e) => e.id === id);
	// -Hiển thị thông tin của học sinh lên các ô input tương ứng
	document.getElementById('id').value = student.id;
	document.getElementById('name').value = student.name;
	document.getElementById('age').value = student.age;
	document.getElementById('gender').value = student.gender;
	document.getElementById('point').value = student.point;

	document.getElementById('btn-add').style.display = 'none';
	document.getElementById('btn-update').style.display = 'inline';
}
document.getElementById('btn-update').onclick = function () {
	// Bước 3: Lấy thông tin người dùng vừa sửa trong các thẻ input
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const point = document.getElementById('point').value;
	// Bước 4: Update dữ liệu vào trong mảng
	const index = listStudent.findIndex((student) => student.id === Number(id));

	console.log(listStudent[index]);

	listStudent[index].name = name;
	listStudent[index].age = age;
	listStudent[index].gender = gender;
	listStudent[index].point = point;

	document.getElementById('btn-update').style.display = 'none';
	document.getElementById('btn-add').style.display = 'inline';
	clearInput();
	renderData(listStudent);
};

renderData(listStudent);
