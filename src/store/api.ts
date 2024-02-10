import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query';

const defaultQuery = retry(
	fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
		credentials: 'include',
		prepareHeaders: headers => {
			const token = localStorage.getItem('token');
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			headers.set('content-type', 'application/json');
			return headers;
		},
	}),
	{ maxRetries: 3 }
);

const api = createApi({
	baseQuery: defaultQuery,
	reducerPath: 'api',
	tagTypes: [],
	endpoints: () => ({}),
	keepUnusedDataFor: 0,
	refetchOnReconnect: true,
});

export default api;
