import React, { useEffect, useState } from 'react';
import {useDebouncedCallback } from 'use-lodash-debounce'

const useInput = (key) => {
	const [value, setValue] = useState(null);

	const getValue = (event) => {
        console.log(event.target.value)
		setValue(event.target.value);
	};

	useEffect(() => {
		let dataLocalStorage = localStorage.getItem(key);
		setValue(dataLocalStorage);
	}, []);

	useEffect(() => {
		if (value !== null) {
			localStorage.setItem(key, value);
		}
	}, [value]);

	return {
		value: value,
		onChange: getValue,
	};
};

export default useInput;
