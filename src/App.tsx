import React from 'react'
import { Provider } from 'react-redux'

import { SplashScreen } from '@components/SplashScreen'
import { store } from '@store'

export const App = () => {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  )
}
