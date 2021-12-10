import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITodo } from '../models';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:5000" }),
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], number>({
      query: (limit = 20) => ({
        url: "/todos",
        params: {
          _limit: limit
        }
      })
    })
  })
})