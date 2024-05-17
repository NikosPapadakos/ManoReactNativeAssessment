import { configureStore } from '@reduxjs/toolkit'
import { rtkMiddleware, rtkReducer } from '@services/apis'

export const store = configureStore({
  reducer: { ...rtkReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
