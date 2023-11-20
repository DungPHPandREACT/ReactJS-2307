import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state, action) => {
			return state + action.payload;
		},
		decrement: (state, action) => {
			return state - action.payload;
		},
	},
});

export const { increment, decrement } = calculatorSlice.actions;
export default calculatorSlice.reducer;
