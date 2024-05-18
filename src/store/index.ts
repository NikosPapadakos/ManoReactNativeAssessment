import { configureStore } from '@reduxjs/toolkit'

import { rtkMiddleware, rtkReducer } from '../store/services/apis'
import { slicesReducer } from './slices'

export const store = configureStore({
  reducer: { ...slicesReducer, ...rtkReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
