import React, { PropsWithChildren, ReactElement } from 'react';
import { Provider, TypedUseSelectorHook } from 'react-redux';



import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { render } from '@testing-library/react-native';



import { slicesReducer } from './slices';


/**
 * @param preloadedState used to load the store with different values.
 * @returns a store instance with the real reducers and a preloaded state.
 */
const testStore = (
  preloadedState?: Partial<TypedUseSelectorHook<RootState>>
) => {
  return configureStore({
    reducer: slicesReducer,
    preloadedState,
  })
}
/**
 * Handles the state for test cases.
 * @param component component to wrap with the Provider
 * @param preloadedState initial state for the store
 * @returns A wrapper of the component provided with a test store.
 */
export const renderWithProviders = (
  component: ReactElement,
  preloadedState = {}
) => {
  const store = testStore(preloadedState)
  const wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(component, { wrapper }) }
}