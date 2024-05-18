import React from 'react'
import { ViewStyle } from 'react-native'

import { SafeAreaContainer } from './styles'

export const SafeArea = ({
  children,
  style = {},
}: {
  children: React.ReactNode
  style?: ViewStyle
}) => {
  return (
    <SafeAreaContainer testID='safe-area' style={style}>
      {children}
    </SafeAreaContainer>
  )
}
