import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UsersType } from './type';

export const userApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://users-api-powl.onrender.com/' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query<UsersType[],string>({
      query: () => 'users',
      providesTags: ['users'],
    }),

    createUser: builder.mutation({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['users'],
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['users'],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
