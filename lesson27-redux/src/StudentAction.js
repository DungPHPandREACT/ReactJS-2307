import React from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, deleteStudent } from './actions/studentActions';

const StudentAction = () => {
	const dispatch = useDispatch();

	const handleAddStudent = () => {
		dispatch(
			addStudent({ id: 3, name: 'Student được add bằng dispatch', age: 20 })
		);
	};
	const handleDeleteStudent = () => {
		dispatch(deleteStudent(1));
	};
	return (
		<div>
			<button onClick={handleAddStudent}>Add student</button>
			<button onClick={handleDeleteStudent}>Delete student</button>
		</div>
	);
};

export default StudentAction;
