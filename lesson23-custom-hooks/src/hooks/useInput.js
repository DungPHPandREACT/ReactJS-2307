import React, { useState } from 'react';

const useInput = (initValue) => {
	const [value, setValue] = useState(initValue);

	const getValue = (event) => {
		setValue(event.target.value);
	};

	return {
		value: value,
		onChange: getValue,
	};
};

export default useInput;
