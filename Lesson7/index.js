// if(condition1){
//     code 1
// } else if(condition2){
//     code 2
// } else if(conditionN){
//     code N
// } else{
//     code else
// }

// Dựa vào điểm trung bình => Phân loại học sinh
// GPA >= 8.0 => Học sinh giỏi
// 6.5 <= GPA <8.0 => Học sinh khá
// GPA >= 6.5 && GPA < 8.0
// 5.0 <= GPA <6.5 => Học sinh trung bình
// GPA < 5 => Học sinh yếu

const GPA = 4.0;
if (GPA >= 8.0) {
	console.log('Học sinh giỏi');
} else if (GPA >= 6.5 && GPA < 8.0) {
	console.log('Học sinh khá');
} else if (GPA >= 5.0 && GPA < 6.5) {
	console.log('Học sinh trung bình');
} else {
	console.log('Học sinh yếu');
}
// 17. Nhập vào 2 số w và h (prompt js) là cân nặng và chiều cao của 1 người.
let w = prompt('Mời bạn nhập cân nặng (kg): ');
let h = prompt('Mời bạn nhập chiều cao (m):');

// Hãy tính chỉ số BMI và đưa ra kết quả:
// BMI = w/(h*h)
const BMI = w / (h * h);

// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường”
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”
if (BMI < 18.5) {
	console.log('Nhẹ cân');
}else if (BMI >= 18.5 && BMI < 23) {
	console.log('Bình thường');
}else if (BMI >= 23 && BMI < 25) {
	console.log('Thừa cân');
} else {
	console.log('Béo phì');
}
