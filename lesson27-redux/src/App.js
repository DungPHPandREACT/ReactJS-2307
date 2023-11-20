import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/CalculatorActions';

const App = () => {
	const value = useSelector((state) => state.calculator);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment(1));
	};

	const handleDecrement = () => {
		dispatch(decrement(1));
	};

	return (
		<div>
			<h1>Number: {value}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};

export default App;
