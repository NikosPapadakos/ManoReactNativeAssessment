import React from 'react'

import { MotiView } from 'moti'

import { Logo, SplashContainer } from './styles'

export const SplashScreen = () => {
  return (
    <SplashContainer>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1000,
        }}
      >
        <Logo />
      </MotiView>
    </SplashContainer>
  )
}
