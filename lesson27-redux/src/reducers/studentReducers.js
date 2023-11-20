const initState = [
	{
		id: 1,
		name: 'Trần Văn A',
		age: 18,
	},
	{
		id: 2,
		name: 'Nguyễn Thị B',
		age: 20,
	},
];

const studentReducers = (listStudent = initState, action) => {
	switch (action.type) {
		case 'ADD_STUDENT':
			return [...listStudent, action.payload];
		case 'DELETE_STUDENT':
			return listStudent.filter((student) => student.id !== action.payload);
		default:
			return listStudent;
	}
};

export default studentReducers;
