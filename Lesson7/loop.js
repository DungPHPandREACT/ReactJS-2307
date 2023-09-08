//

// Hãy tính tổng các số từ 1 đến 5.
// let count = 0;
// for (let i = 1; i <= 5; i++) {
// 	count = count + i;
// }
// // i = 1
// => count = count + i = 0 + 1 = 1
// // i = 2
// => count = count + i = 1 + 2 = 3
// // i =3
// => count = count + i = 3 + 3 = 6
// // i =4
// => count = count + i = 6 + 4 =10
// // i = 5
// => count = count + i = 10 + 5 = 15

// console.log(count)

// Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;
// // undefined + 1 => NaN (not a number)
// for (let i = -10; i <= 50; i++) {
// 	if (i % 2 === 0) {
// 		sum = sum + i;
// 	}
// }
// console.log(sum);

// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for (let i = -100; i <= 100; i++) {
// 	if (i % 9 === 0) {
// 		console.log(i);
// 	}
// }

// let i = -100;
// while (i <= 100) {

// 	if (i % 9 == 0) {
// 		console.log(i);
// 	}

// 	i = i + 1;
// }

// let theNumber = 6;
// while (theNumber >= 5) {
// 	console.log(theNumber);
// 	theNumber = Math.floor(Math.random() * 10);
// }

// let i = 10;
// do {
// 	console.log(i);
// } while (i < 10);

// for (let i = 0; i<=5; i++) {
// 	if (i === 4) {
// 		continue;
// 	}
// 	console.log(i);

// }

// In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let j = 1; j <= 300; j++) {
// 	if (j % 2 === 0 && j % 3 === 0) {
// 		console.log(j);
// 	}
// }

// Nhập vào số n. Tính giai thừa của số n.
let n = Number(prompt('Nhập n'));
console.log(n);
let gt = 1;
for (let i = 1; i <= n; i++) {
	gt = gt * i;
}
console.log(gt);
