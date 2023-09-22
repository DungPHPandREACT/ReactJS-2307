const n = Number(prompt('Mời bạn nhập n'));

let contentHTML = '';

for (let i = 1; i <= n; i++) {
	contentHTML += `<li>${i}</li>\n`;
}

console.log(contentHTML);

document.getElementById('list-number').innerHTML = contentHTML;
