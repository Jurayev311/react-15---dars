import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './api'

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})