import React from 'react'

import { MotiView } from 'moti'

import { Logo, SplashContainer } from './styles'

export const SplashScreen = ({ show }: { show: boolean }) => {
  return (
    <SplashContainer
      from={{ opacity: 1 }}
      animate={{
        opacity: show ? 1 : 0,
        display: show ? 'flex' : 'none',
      }}
      transition={{
        duration: 500,
        delay: 1000,
      }}
    >
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
