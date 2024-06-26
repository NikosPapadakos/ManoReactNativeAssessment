import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { AppNavigator } from '@screens'
import { store } from '@store'

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}
