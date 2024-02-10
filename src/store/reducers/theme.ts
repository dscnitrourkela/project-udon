import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system',
} as {
	theme: 'light' | 'dark' | 'system';
};

const theme = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		},

		setTheme(state, action: PayloadAction<'light' | 'dark' | 'system'>) {
			state.theme = action.payload;
		},
	},
});

export const { toggleTheme, setTheme } = theme.actions;

export default theme.reducer;
