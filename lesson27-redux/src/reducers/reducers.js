import { combineReducers } from 'redux';
import calculatorReducers from './calculatorReducers';
import studentReducers from './studentReducers';

export default combineReducers({
	calculator: calculatorReducers,
	student: studentReducers,
});
