import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';

function App() {
	// Cách thông thường
	// const [name, setName] = useState('');
	// const [age, setAge] = useState('');
	// const [description, setDescription] = useState('');

	// const getName = (event) => {
	// 	console.log('event.target.value: ' + event.target.value);
	// 	setName(event.target.value);
	// };
	// const getAge = (event) => {
	// 	console.log('event.target.value: ' + event.target.value);
	// 	setAge(event.target.value);
	// };
	// const getDescription = (event) => {
	// 	console.log('event.target.value: ' + event.target.value);
	// 	setDescription(event.target.value);
	// };

	// Cách 2: sử dụng custom hook
	const input1 = useInput('name');
	const input2 = useInput('age');
	const input3 = useInput('description');


	const handleShowUser = () => {
		console.log(
			'name, age, description: ',
			input1.value,
			input2.value,
			input3.value
		);
	};
	return (
		<div className='App'>
			<div>
				<label>Name</label>
				<input
					type='text'
					// onChange={getName} value={name} // cách 1
					onChange={input1.onChange}
					value={input1.value}
				/>
			</div>
			<div>
				<label>Age</label>
				<input
					type='text'
					// onChange={getAge} value={age} // cách 1
					onChange={input2.onChange}
					value={input2.value}
				/>
			</div>
			<div>
				<label>Description</label>
				<input
					type='text'
					// onChange={getDescription} value={description}
					onChange={input3.onChange}
					value={input3.value}
				/>
			</div>
			<div>
				<button onClick={handleShowUser}>Show user</button>
			</div>
		</div>
	);
}

export default App;
