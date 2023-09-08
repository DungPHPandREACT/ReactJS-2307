// let listNumber = [];
// let listNumber = new Array();
// let listName = ['Bạn A', 'Bạn B', 'Bạn C'];
// let listName = new Array('Bạn A', 'Bạn B', 'Bạn C')
// console.log(listNumber);
// console.log(Array.isArray(value))

//1. Truy xuất & thay đổi giá trị của 1 phần tử.
// console.log(listName)
// listName[0] = "Nguyễn Văn A"
// console.log(listName)
//2. Duyệt mảng
// console.log(listName.length);
// for (let i = 0; i < listName.length; i++) {
// 	console.log(listName[i]);
// }
// 3. Thêm, xóa phần tử

// console.log(listName);
// *Thêm
// listName.push('Bạn D', 'Bạn E', 'Bạn F');
// listName.unshift('Bạn D', 'Bạn E', 'Bạn F');
// *Xóa
// listName.pop();
// listName.shift();
// array.splice(index, countDelete, element1,..., elementN)
// array: tên mảng muốn thao tác
// index: vị trí của phần tử muốn thao tác
// countDelete: số lượng phần tử muốn
// Dùng splice để xóa phần tử
// listName.splice(0,1)
// Dùng splice để thêm phần tử
// listName.splice(1, 0,'Bạn E', 'Bạn F' )
// console.log(listName);

const array1 = [1, 2, 3];
const array2 = array1;
console.log(array1);
console.log(array2);
array2[0] = 10;
console.log(array1);
console.log(array2);