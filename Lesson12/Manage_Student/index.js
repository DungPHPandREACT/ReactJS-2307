let listStudent = [];
if (localStorage.getItem('listStudent') !== null) {
	listStudent = JSON.parse(localStorage.getItem('listStudent'));
}

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

// function get info student
function getDataFromInput() {
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const point = document.getElementById('point').value;

	return {
		id,
		name,
		age,
		gender,
		point,
	};
}

// Add student
// Bước 1: Gán sự kiện on click cho button "Add student"
document.getElementById('btn-add').onclick = function () {
	// Bước 2: Trong hàm xử lý sự kiện
	// -Lấy được dữ liệu người dùng đang nhập ở input
	const { id, name, age, gender, point } = getDataFromInput();
	// -Tạo 1 object mới chứa các thông tin vừa lấy được, push vào mảng
	const newStudent = {
		id,
		name,
		age,
		gender,
		point,
	};
	listStudent.push(newStudent);
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
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
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
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
	document.getElementById('id').disabled = true;
}
document.getElementById('btn-update').onclick = function () {
	// Bước 3: Lấy thông tin người dùng vừa sửa trong các thẻ input
	const { id, name, age, gender, point } = getDataFromInput();

	document.getElementById('id').disabled = false;
	// Bước 4: Update dữ liệu vào trong mảng
	const index = listStudent.findIndex((student) => student.id === Number(id));

	listStudent[index].name = name;
	listStudent[index].age = age;
	listStudent[index].gender = gender;
	listStudent[index].point = point;

	localStorage.setItem('listStudent', JSON.stringify(listStudent));

	document.getElementById('btn-update').style.display = 'none';
	document.getElementById('btn-add').style.display = 'inline';
	clearInput();
	renderData(listStudent);
};

// Bước 1: Gán sự kiện onclick cho button search
document.getElementById('btn-search').onclick = function () {
	// Bước 2: Lấy keyword người dùng nhập từ input
	const keyword = document.getElementById('input-search').value;
	// Bước 3: Sử dụng hàm filter để lọc theo từ khóa người dùng nhập
	const dataSearch = listStudent.filter(
		(student) =>
			student.id == keyword ||
			student.age == keyword ||
			student.name.includes(keyword) ||
			student.point == keyword ||
			student.gender == keyword
	);

	renderData(dataSearch);
};

document.getElementById('input-search').oninput = function () {
	// Bước 2: Lấy keyword người dùng nhập từ input
	const keyword = document.getElementById('input-search').value;
	// Bước 3: Sử dụng hàm filter để lọc theo từ khóa người dùng nhập
	const dataSearch = listStudent.filter(
		(student) =>
			student.id == keyword ||
			student.age == keyword ||
			student.name.toLowerCase().includes(keyword.toLowerCase()) ||
			student.point == keyword ||
			student.gender == keyword
	);
	// Bước 4: In ra màn hình dữ liệu trả về
	renderData(dataSearch);
};
//Lưu dữ liệu vào local storage
renderData(listStudent);
