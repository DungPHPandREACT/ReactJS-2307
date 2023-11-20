export const addStudent = (newStudent) => {
	return {
		type: 'ADD_STUDENT',
		payload: newStudent,
	};
};

export const deleteStudent = (id) => {
	return {
		type: 'DELETE_STUDENT',
		payload: id,
	};
};
