import React, { useState } from 'react'

import { SplashScreen } from '@components/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from './HomeScreen'
import { ProductDetailsScreen } from './ProductDetailsScreen'
import { SCREEN_NAMES } from './screenNames'

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <SplashScreen show={showSplash} />
      <NavigationContainer
        onReady={() => {
          setShowSplash(false)
        }}
      >
        <Stack.Navigator initialRouteName={SCREEN_NAMES.App.InitialRouteName}>
          <Stack.Screen
            name={SCREEN_NAMES.App.HomeScreen}
            component={HomeScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.App.ProductDetailsScreen}
            component={ProductDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
