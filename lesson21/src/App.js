import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Counter from './Counter';
import RenderAge from './RenderAge';
import RenderName from './RenderName';
import Example from './Example';

const App = () => {
	const [name, setName] = useState('Trần Thị A');
	const [age, setAge] = useState(18);

	const renderAge = useMemo(() => {
		return <h1>{age}</h1>;
	}, []);

	const loggerAge = useCallback(() => {
		console.log('In ra tuổi: ', age);
	}, []);

	loggerAge();

	return (
		// <div>
		// 	<button onClick={() => setIsShow(!isShow)}>Toggle</button>
		// 	{isShow ? <Counter /> : ''}
		// </div>

		// <div>
		// 	{/* <RenderName name={name} />
		// 	<RenderAge age={age} /> */}

		// 	{renderAge}

		// 	<button onClick={() => setName('Nguyễn Văn B')}>Đổi tên</button>
		// 	<button onClick={() => setAge(age + 1)}>Tăng tuổi</button>
		// </div>

    <Example />
	);
};

export default App;
