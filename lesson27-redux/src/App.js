import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './actions/calculatorActions';
import StudentAction from './StudentAction';
import { decrement, increment } from './slices/CalculatorSlice';

const App = () => {
	const value = useSelector((state) => state.calculator);
	console.log('value: ', value);
	const listStudent = useSelector((state) => state.student);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment(1));
	};

	const handleDecrement = () => {
		dispatch(decrement(1));
	};

	console.log('listStudent: ', listStudent);

	return (
		<div>
			<h1>Number: {value}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<StudentAction />
		</div>
	);
};

export default App;
