import { mainApi } from './index';

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCar: build.query({
      query: (params) => ({
        url: '/cars',
        method: "GET",
        params
      }),
      providesTags: ["CARS"] 
    }),
    createCar: build.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body
      }),
      invalidatesTags: ["CARS"] 
    }),
    deleteCar: build.mutation ({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["CARS"]
    })
  }),
  overrideExisting: false,
});

export const { useGetCarQuery, useCreateCarMutation, useDeleteCarMutation } = extendedApi;