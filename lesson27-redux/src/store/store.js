// import { createStore } from 'redux';
// import reducers from '../reducers/reducers';

// const store = createStore(reducers);

// store.subscribe(() => {
// 	console.log('có sự thay đổi redux');
// });

// redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
import CalculatorReducer from '../slices/CalculatorSlice';

const store = configureStore({
	reducer: {
		calculator: CalculatorReducer,
	},
});

export default store;
