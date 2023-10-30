import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import { useRef, useState } from 'react';
import AppContext from './contexts/AppContext';

function App() {
	const [listNumber, setListNumber] = useState([1, 2, 3, 4, 5]);

	let number1 = 9;
	const [number2, setNumber2] = useState(10);
	const number3 = useRef(5);
	const refInput = useRef();

	const handleChangeNumber1 = () => {
		number1 = number1 + 1;
	};

	const handleChangeNumber2 = () => {
		setNumber2(number2 + 1);
	};

	const handleChangeNumber3 = () => {
		number3.current = number3.current + 1;
	};

	const dataContext = {
		listNumber: listNumber,
		onChangeListNumber: setListNumber,
	};

	const handleFocus = () => {
		// document.getElementById('myTxt').focus();
		refInput.current.focus();
		refInput.current.style.height = '50px';
	};

	console.log('number1: ' + number1);
	console.log('number2: ' + number2);
	console.log('number3: ', number3);

	return (
		<AppContext.Provider value={dataContext}>
			<button onClick={handleChangeNumber1}>Change valuee number1</button>
			<button onClick={handleChangeNumber2}>Change valuee number2</button>
			<button onClick={handleChangeNumber3}>Change valueee number3</button>
			<div style={{ marginTop: '12px' }}>
				<input ref={refInput} id='myTxt' type='text' />
				<button onClick={handleFocus}>Focus</button>
			</div>
			{/* <h1>Component App</h1>
			<ComponentA /> */}
		</AppContext.Provider>
	);
}

export default App;
