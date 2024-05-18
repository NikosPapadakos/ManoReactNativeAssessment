import React, { useState } from 'react'

import { SplashScreen } from '@components/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAVIGATION_THEME } from '@theme'

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
        theme={NAVIGATION_THEME}
        onReady={() => {
          setTimeout(() => {
            setShowSplash(false)
          }, 2000)
        }}
      >
        <Stack.Navigator
          initialRouteName={SCREEN_NAMES.App.InitialRouteName}
          screenOptions={{
            headerShown: false,
          }}
        >
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
