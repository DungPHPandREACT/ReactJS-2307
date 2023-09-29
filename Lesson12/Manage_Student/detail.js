const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let listStudent = [];

if (localStorage.getItem('listStudent') !== null) {
	listStudent = JSON.parse(localStorage.getItem('listStudent'));
}

const index = listStudent.findIndex((student) => student.id === id);

if (index !== -1) {
	document.getElementById('detail-student').innerHTML = `
            <ul class="list-group list-group-flush">
				<li class="list-group-item">Id: ${listStudent[index].id}</li>
				<li class="list-group-item">Name: ${listStudent[index].name}</li>
				<li class="list-group-item">Age: ${listStudent[index].age}</li>
				<li class="list-group-item">Gender: ${listStudent[index].gender}</li>
				<li class="list-group-item">Point: ${listStudent[index].point}</li>
			</ul>
    `;
} else {
	document.getElementById('detail-student').innerHTML = `
        Không có học sinh hợp lệ
    `;
}
