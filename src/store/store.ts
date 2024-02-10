import { configureStore } from '@reduxjs/toolkit';
import api from './api';
import theme from './reducers/theme';

const store = configureStore({
	reducer: {
		theme,
		// ...
		[api.reducerPath]: api.reducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
