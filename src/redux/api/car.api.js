import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCar: build.query({
      query: () => '/cars',
    }),
  }),
  overrideExisting: false,
})

export const { useGetCarQuery } = extendedApi