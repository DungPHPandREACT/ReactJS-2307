export const increment = (value) => {
	return {
		type: 'ADD',
		payload: value,
	};
};

export const decrement = (value) => {
	return {
		type: 'SUBTRACT',
		payload: value,
	};
};
