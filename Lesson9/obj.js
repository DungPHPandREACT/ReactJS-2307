const mySelf = {
	name: 'Dungx',
	gender: 'boy',
	country: 'Viet Nam',
	favorites: ['bi a', 'code', 'read book'],
	access: 'ABC',
	1: 'một',
};
// const access = 'gender';
// R: read (truy xuất)
// console.log(mySelf['gender'])
// console.log(mySelf.gender)
// console.log(mySelf[access]);

// D: delete (xóa)
// console.log(mySelf);
// delete mySelf.access;
// delete mySelf['access']
// console.log(mySelf);

//Set: Thêm key vào object, thay đổi giá trị key
// console.log(mySelf);
// mySelf.name = 'Đỗ Tiến Dũng';
// console.log(mySelf);

// for of
// for (let abc in mySelf) {
// 	console.log(mySelf[abc]);
// }

// console.log('Object.keys(mySelf): ',  )
// console.log('Object.values(mySelf): ', Object.values(mySelf))

const listStudent = [
	{
		name: 'Student 1',
		point: 9.2,
	},
	{
		name: 'Student 2',
		point: 5,
	},
	{
		name: 'Student 3',
		point: 8,
	},
];
// function getInfo(name, point) {
// 	console.log(name);
// 	console.log(point);
// }
// // getInfo('Nguyễn Văn A', 10)
// // getInfo('Trần Thị B', 8)
// getInfo(listStudent[0].name);
// getInfo(listStudent[1].name, listStudent[1].point);

// Tính tổng của các cặp số
// 1-5
// 3-6
// function calSum(a, b) {
// 	const sum = a + b;

// 	console.log('sum trong function: ' + sum);
// 	return sum;
// }

// const sum = calSum(1, 5);
// console.log('sum ngoài function: ' + sum);

// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
// thực hiện in ra màn hình “Hello world, ” + name.
// function printName(name) {
// 	console.log('Hello world, ' + name);
// }
// printName('Vũ');
// printName('Tiến');
// printName('Vân');

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2 .
// function calculate(a, b) {
// 	return (a + b) ** 2;
// }

// console.log(calculate(2, 4));

// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.

// function printNumber() {
// 	let a;
// 	for (; true; ) {
// 		a = prompt('Nhập a');
// 		if (a > 0) {
// 			break;
// 		}
// 	}
// 	return a;
// }

// console.log(printNumber());

// // function A
// function funcA() {
// 	console.log('Đây là function A');
// }

// // function B
// function funcB() {
// 	console.log('Đây là function B');
// }

// // function X
// function funcX() {
// 	console.log('Đây là function X');
// }

// // function Z
// function funcZ() {
// 	console.log('Đây là function Z');
// }

// // function C
// function funcC(fun1, fun2) {
// 	fun1();
// 	fun2();
// }
// // Gọi funcC lần đầu => Chạy codee của funcA và funcB
// funcC(funcA, funcB);
// // Gọi funcC lần 2 => Chạy codee của funcX và funcZ
// funcC(funcX, funcZ);

// setTimeout(callback, milliseconds)
function fnTimeout() {
	console.log('Hello world!');
}
// setTimeout(fnTimeout, 3000);
setInterval(function fnInterval (){
    console.log('Set Interval')
}, 1000);
