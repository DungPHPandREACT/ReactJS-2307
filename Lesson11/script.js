// console.log(document.getElementById('my-title'))
// console.log(document.getElementsByClassName('title'))
// console.log(document.getElementsByTagName('h1'))

// //Lấy nội dung phần tử: innerHTML, innerText
// console.log(document.getElementById('my-title').innerText);
// const title = document.getElementById('my-title').innerText;
// console.log(title);

// //Thay đổi nội dung
// document.getElementById('my-title').innerText =
// 	'<span style="color: red;">Đã thay đổi nội dung</span>';

// console.log(document.getElementById('tagA').getAttribute('href'));

// document.getElementById('tagA').style.fontSize = '50px';

// const listTagLi = document.getElementsByClassName('favorite-list-item');
// // Ý 1
// for (let i = 0; i < listTagLi.length; i++) {
// 	listTagLi[i].innerHTML = 'I love this thing';
// }
// // Ý 2
// for (let i = 0; i < listTagLi.length; i++) {
// 	listTagLi[i].style.color = 'red';
// }
// Ý 3
// const content = 'Test create tag';
// Tạo thẻ mới
// const tagLi = document.createElement('li');
// Gán nội dung cho thẻ vừa tạo
// tagLi.innerHTML = content;
// Chỉ định vị trí muốn thêm thẻ vừa tạo
// document.getElementById('favorite-list').appendChild(tagLi);

// function logger() {
// 	alert('Envent inline');
// }

// document.getElementById('btn').onclick = function () {
// 	alert('Goodbye');
// };

// document.getElementById('btn').onclick = function () {
// 	alert('Tạm biệt');
// };

// document.getElementById('btn-bye').addEventListener('click', function () {
// 	alert('Say bye bye');
// });

// document.getElementById('btn-bye').addEventListener('click', function () {
// 	alert('12345');
// });

// Bước 1: Gán event onchange cho các thẻ input
// Bước 2: Trong hàm onchange => lấy giá trị người dùng đang nhập trong input
// Bước 3: Lấy giá trị đó gán cho attribute
const $inputUrl = document.getElementById('url');
const $image = document.getElementById('image');

$inputUrl.onchange = function () {
	const inputValue = $inputUrl.value;
	// console.log(inputValue);
	// document.getElementById('image').setAttribute('src', inputValue);
	$image.src = inputValue;
};
