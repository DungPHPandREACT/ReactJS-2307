import React, { useEffect, useState } from 'react';

const Counter = () => {
	const [number, setNumber] = useState(1);

	const [number2, setNumber2] = useState(1);

	const [count, setCount] = useState(1);

	// useEffect(callback, depedenccy)
	// callback sẽ được chạy sau khi component được render
	// useEffect(() => {
	// 	console.log('useEffect không có gì');
	// });
	//trong trường hợp này (không truyền dependency) callback trong useEffect
	//được gọi lại sau mỗi lần component render

	useEffect(() => {
		console.log('useEffect []');

		return () => {
			console.log('vào return trong useEffect');
		};
	}, []);
	//trong trường hợp này (dependency là []) callback trong useEffect
	//được gọi duy nhất 1 lần sau lần render đầu tiên

	// console.log(
	// 	'document.getElementById: ',
	// 	document.getElementById('container')
	// );

	// useEffect(() => {
	// 	console.log('useEffect [number]');
	// }, [number, number2]);
	//trong trường hợp này (dependency là [parameter1,....parameterN]) callback trong useEffect
	//được gọi khi 1 trong số những paramter thay đổi
	return (
		<div id='container'>
			<h1>Number1: {number}</h1>
			<button onClick={() => setNumber(number + 1)}>
				Increasement number 1
			</button>

			<h1>{number2}</h1>
			<button onClick={() => setNumber2(number2 + 1)}>
				Increasement number 2
			</button>

			{/* <h1>{count}</h1> */}
		</div>
	);
};

export default Counter;
