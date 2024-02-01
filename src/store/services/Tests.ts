import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TestType } from './type';

export const testApi = createApi({
	reducerPath: 'testApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://test-api-84tb.onrender.com/' }),
	tagTypes: ['test'],
	endpoints: (builder) => ({
		getTests: builder.query<TestType[], string>({
			query: () => `test`,
			providesTags: ['test'],
		}),
	}),
});

export const {
	useGetTestsQuery
} = testApi;
