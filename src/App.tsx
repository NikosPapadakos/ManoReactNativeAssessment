import React from 'react'
// import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import { AppNavigator } from '@screens'
import { store } from '@store'

enableScreens()

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
