// -ES6 (ECMA 2015) -> 2023
// +let/const
// var và let/const
//+ Scope:
// var: không có scope (biến global)
// let/const: có scope { }
// +Hoisting
// var: hoisting
// let/const: không có hoisting

// +template literal: kiểu viết nội suy
// let course1 = 'HTML';
// let course2 = 'CSS';
// let course3 = 'JS';
// //output: "Bạn đã tham gia học khóa HTML, khóa CSS và khóa JS"
// console.log(
// 	'Bạn đã tham gia học khóa ' +
// 		course1 +
// 		', khóa ' +
// 		course2 +
// 		' và khóa ' +
// 		course3
// );
// console.log(`Bạn đã tham gia học khóa ${course1}, khóa ${course2} và khóa ${course3}`)

// Output:
// Dòng 1
// Dòng 2
// Dòng 3
// const example = "Dòng 1 \nDòng 2 \nDòng 3"
// const example = `Dòng 1
// Dòng 2
// Dòng 3`
// console.log(example)

// +speard operator (...)
// const array1 = [1, 2, 3];
// const array2 = [...array1, ...array1, ...array1, ...array1];
// console.log(array1);
// console.log(array2);
// array1[0] = 20;
// console.log(array1);
// console.log(array2);

// const object1 = {
// 	age: 20,
// 	name: 'John',
// 	girlFriend: {
// 		age: 18,
// 		name: 'Mrs',
// 	},
// };
// const object2 = { ...object1, girlFriend: { ...object1.girlFriend } };
// console.log(object1);
// console.log(object2);
// object1.girlFriend.name = 'Merry';
// console.log(object1);
// {
// 	age: 20,
// 	name: 'John',
// 	girlFriend: {
// 		age: 18,
// 		name: 'Merry',
// 	},
// };
// console.log(object2);
// {
// 	age: 20,
// 	name: 'John',
// 	girlFriend: {
// 		age: 18,
// 		name: 'Mrs',
// 	},
// };
// copy shallow object và copy deep object

// +rest operator (...)
// -Viết 1 hàm duy nhất để tính tổng các dãy số sau
// 	+ 1,2,3
// 	+ 1,2,3,4
// 	+ 1,2,3,4,5
// 	+ 1,2,3,4,5,6
// 	+ 3,5,7,10,20,30,40

function sum(...listNumber) {
	console.log(listNumber); //
	// Tính tổng các phần tử trong mảng
}
// sum(1, 2, 3);
// sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4, 5, 6);
// sum(3, 5, 7, 10, 20, 30, 40);

// +default parameter

// +destructuring
// +arrow function
// +module
