import logo from './logo.svg';
import './App.css';
import CardProduct from './CardProduct';
import CardCollection from './CardCollection';
import { useState } from 'react';
import LightTraffic from './LightTraffic';
import PrintName from './PrintName';
import { Button } from 'antd';

function App() {
	// const [ten_state, ham_thay_doi_state] = useState(initValue)

	const [number, setNumber] = useState(1);

	const [student, setStudent] = useState({
		name: 'Lê Đức Chiến',
	});

	// let number = 1;

	let name = 'ABC';

	const handleActions = (operator) => {
		if (operator === '+') {
			name = 'XYZ';
			setNumber(number + 1);
		} else if (operator === '-') {
			setNumber(number - 1);
		} else {
			setNumber(1);
		}

		// console.log('number: ', number);
	};

	console.log('render');

	console.log('name: ', name);

	const handleChangeName = () => {
		const studentUpdate = { ...student };
		studentUpdate.name = 'Phạm Trọng Vinh';
		console.log('studentUpdate: ', studentUpdate);
		setStudent(studentUpdate);
	};

	return (
		<div className='App'>
			<Button type='link' danger loading={true}>
				Primary
			</Button>
			{/* <h1>{number}</h1>
			<button
				onClick={() => {
					handleActions('+');
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					handleActions('-');
				}}
			>
				-
			</button>
			<button onClick={handleActions}>Reset</button>

			<h1>Tên: {student.name}</h1>
			<button onClick={handleChangeName}>Change name</button> */}

			{/* <LightTraffic /> */}
			<PrintName />
		</div>
	);
}

export default App;
