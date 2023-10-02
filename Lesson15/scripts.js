// setTimeout(function () {
// 	console.log(1);
// }, 4000);
// setTimeout(function () {
// 	console.log(2);
// }, 3000);
// setTimeout(function () {
// 	console.log(3);
// }, 2000);
// setTimeout(function () {
// 	console.log(4);
// }, 1000);

// setTimeout(function () {
// 	console.log(1);
// 	setTimeout(function () {
// 		console.log(2);
// 		setTimeout(function () {
// 			console.log(3);
// 			setTimeout(function () {
// 				console.log(4);
// 			}, 1000);
// 		}, 2000);
// 	}, 3000);
// }, 4000);

// callback
function A(callback) {
	console.log('Đây là hàm A');
	callback();
}

// A(() => {
// 	console.log('Đây là hàm callback');
// });
// promise
function logTime(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (time) {
				resolve('Success');
			} else {
				reject('Error');
			}
			console.log(time);
		}, time);
	});
}

// logTime(4000)
// 	.then((status) => {
// 		console.log('status: ', 4);
// 		return logTime(3000);
// 	})
// 	.then((status) => {
// 		console.log('status: ', 3);
// 		return logTime();
// 	})
// 	.then((status) => {
// 		console.log('status: ', 2);
// 		return logTime(1000);
// 	})
// 	.then((status) => {
// 		console.log('status: ', 1);
// 		return logTime(0);
// 	})
// 	.catch((err) => {
// 		console.log('err: ', err);
// 	});

// async await

// async function logger() {
// 	try {
// 		const status1 = await logTime(2000);
// 		console.log(status1);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// logger();

console.log(1);
try {
	console.log(name);
} catch (err) {
	console.log(err);
}
console.log(3);
