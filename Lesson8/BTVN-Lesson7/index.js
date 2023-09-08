// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// const numberRandom = Math.floor(Math.random() * 20 + 1)
// // Số lượt chơi tối đa
// let count = 0;
// let number;

// do {
// 	number = Number(prompt('Mời bạn đoán'));
// 	count += 1;
// 	if (count === 5) {
// 		break;
// 	}
// } while (numberRandom !== number);

// Bài 16
// Nhập vào số n (n >= 3).
// Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.

const n = 7;
for (let i = 1; i <= n; i++) {
	let starInline = '';
	for (let j = 1; j <= i; j++) {
		starInline += '*';
	}
	console.log(starInline);
}
