import React, { useContext } from 'react';
import AppContext from './contexts/AppContext';

const ComponentD = () => {
	const data = useContext(AppContext);
	console.log('Dữ liệu nhận được: ', data);

	return <h1>ComponentD</h1>;
};

export default ComponentD;
