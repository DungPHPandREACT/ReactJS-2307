// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.

let d1 = prompt('Nhập dãy d1');
let d2 = prompt('Nhập dãy d2');
// console.log(d1);
// console.log(d2);

const d1Array = d1.split(',');
const d2Array = d2.split(',');
// console.log(d1Array);
// console.log(d2Array);

// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let flag = true;
for (let e of d1Array) {
	console.log(e);
	if (d2Array.includes(e) == false) {
		flag = false;
		break;
	}
}
if (flag == true) {
	console.log('Các phần tử d1 đều nằm trong d2');
} else {
	console.log('Có phần tử trong d1 không nằm trong d2');
}
// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let sumd1 = 0;
for (let element of d1Array) {
	sumd1 = sumd1 + Number(element);
}
let flag2 = false;
for (let element of d2Array) {
	if (element % sumd1 == 0) {
		flag2 = true;
		break;
	}
}
if (flag2 === false) {
	console.log('Không có phần tử nào trong d2 chia hết cho tổng của d1');
} else {
	console.log(
		'Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không'
	);
}
// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
const array = d2.concat(d1);
const divide2 = [];
for (let element of array) {
	if (element % 2 === 0) {
		divide2.push(element);
	}
}
console.log(divide2);

// 