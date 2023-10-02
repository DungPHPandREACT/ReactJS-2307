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

// console.log(1);
// try {
// 	console.log(name);
// } catch (err) {
// 	console.log(err);
// }
// console.log(3);

// https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/users

// fetch('https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/users')
// 	.then((response) => {
// 		console.log(response);
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => console.log(err));

async function getAllStudent() {
	try {
		const res = await fetch(
			'https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/users'
		);
		const data = await res.json();
		console.log(data);
        renderNamesStudent(data);
	} catch (err) {
		console.log(err);
	}
}
function renderNamesStudent(data) {
	let stringHTML = '';
	for (let element of data) {
		stringHTML += `<h1>${element.name}</h1>`;
	}

	document.getElementById('all-name').innerHTML = stringHTML;
}
getAllStudent();
