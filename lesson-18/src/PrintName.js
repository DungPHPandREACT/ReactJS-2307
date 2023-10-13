import React, { useState } from 'react';

const PrintName = () => {
	const [userName, setUserName] = useState('');
	let name = '';

	const handleGetName = () => {
		console.log('name: ', name);
		setUserName(name);
	};

	const handleChangeInput = (event) => {
		name = event.target.value;
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Mời bạn nhập tên: '
				onChange={handleChangeInput}
			/>
			<button onClick={handleGetName}>In tên</button>
			<h1>Tên của bạn là: {userName}</h1>
		</div>
	);
};

export default PrintName;
