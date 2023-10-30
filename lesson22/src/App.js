import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import { useState } from 'react';
import AppContext from './contexts/AppContext';

function App() {
	const [listNumber, setListNumber] = useState([1, 2, 3, 4, 5]);

	const dataContext = {
		listNumber: listNumber,
		onChangeListNumber: setListNumber,
	};

	return (
		<AppContext.Provider value={dataContext}>
			<h1>Component App</h1>
			<ComponentA />
		</AppContext.Provider>
	);
}

export default App;
