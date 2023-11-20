const initState = [
	{
		name: 'Trần Văn A',
		age: 18,
	},
	{
		name: 'Nguyễn Thị B',
		age: 20,
	},
];

const studentReducers = (state = initState, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload];
		default:
			return state;
	}
};

export default studentReducers;
