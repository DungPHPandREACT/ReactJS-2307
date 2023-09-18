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

// function sum(...listNumber) {
// 	console.log(listNumber); //
// 	// Tính tổng các phần tử trong mảng
// }
// sum(1, 2, 3);
// sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5);
// sum(1, 2, 3, 4, 5, 6);
// sum(3, 5, 7, 10, 20, 30, 40);

// +default parameter
// function logger(a='a', b='b', c='c', d='d') {
// 	console.log(a); //
// 	console.log(b); //
// 	console.log(c);
// 	console.log(d);
// }
// logger(1,2);

// +destructuring: bóc tách mảng, object
// const time = {
// 	day: 18,
// 	month: 9,
// };
// // 3 biến day,month, year
// // let day = time.day;
// // let month = time.month;
// // let year = time.year;
// let { day:d = 1, month = 1, year = 1 } = time;
// //d = time.day
// console.log(d);

// const array = [1, 2, 3, 4, 5];
// //number1 = array[0];
// const [number1, ...number2] = array;
// console.log(number2);

// +module

// function logger(file) {
// 	console.log(`In ra từ: ${file}`);
// }
// logger('index.js');

// const NUMBER = 10;

// export { logger, NUMBER };

// export default NUMBER;

// +arrow function

// function nameFunction(parameter1, parameter2, ... parameterN){
// code block
// }

// function sum(a, b) {
// 	console.log(a + b);
// }

// const/let/var nameFunction = (parameter1, parameter2, ... parameterN) => {
// code block
// }
const sum = (a, b) => a + b;

console.log(sum(3, 5));

// function bình thường có cơ chế hoisting và có context
// arrow function k có cơ chế hoisting và k có context
