import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67b04e3cdffcd88a6788dc99.mockapi.io' }),
  endpoints: () => ({}),
})
