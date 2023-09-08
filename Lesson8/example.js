// // 1. Khai báo 1 mảng gồm các số bất kỳ.
// const listNumber = [10, 4, 7, 9, 3, 5, 8];
// // -Hãy in ra các số chẵn trong mảng đó.
// for (let i = 0; i < listNumber.length; i++) {
// 	if (listNumber[i] % 2 === 0) {
// 		// console.log(listNumber[i]);
// 	}
// }
// // -Hãy tính tổng các phần tử trong mảng.
// let sum = 0;
// for (let i = 0; i < listNumber.length; i++) {
// 	sum = sum + listNumber[i];
// }
// // console.log(sum);
// // -Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = listNumber[0];
// for (let i = 0; i < listNumber.length; i++) {
// 	if (listNumber[i] < min) {
// 		min = listNumber[i];
// 	}
// }
// console.log(min);

// const multipleArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(multipleArray[1][1])

// BT Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ.
const listNumber = [30, 27, 6, 13, 19, 50, 2, 1, 8];
// -Tính tích của các phần tử trong mảng đó.
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// +Tạo 1 mảng chứa các phần tử chia hết cho 2
const arrayDivide2 = [];
for (let i = 0; i < listNumber.length; i++) {
	if (listNumber[i] % 2 === 0) {
		arrayDivide2.push(listNumber[i]);
	}
}
let min = arrayDivide2[0];
for (let i = 0; i < arrayDivide2.length; i++) {
	if (arrayDivide2[i] < min) {
		min = arrayDivide2[i];
	}
}
console.log(min);
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
for (let j = 0; j < listNumber.length; j++) {
	let n = listNumber[j];
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			count = count + 1;
		}
	}
	if (count === 2) {
		console.log(n, 'là số nguyên tố');
	} else {
		console.log(n, 'không phải số nguyên tố');
	}
}

// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
