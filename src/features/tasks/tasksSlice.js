import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		value: [
			/* {
				id: 1,
				content: 'abc',
			},
			{
				id: 2,
				content: 'pqr',
			},
			{
				id: 3,
				content: 'mnp',
			}, */
		],
	},
	reducers: {
		addTask: (state, action) => {
			state.value = [
				...state.value,
				{
					id:
						state.value.length > 0
							? state.value[state.value.length - 1].id + 1
							: 1,
					content: action.payload.content,
				},
			];
		},
		deleteTask: (state, action) => {
			state.value = state.value.filter(
				(item) => item.id !== action.payload.id
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
