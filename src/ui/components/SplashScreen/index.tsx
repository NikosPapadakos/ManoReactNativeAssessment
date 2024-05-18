import React from 'react'

import { MotiView } from 'moti'

import { Logo, SplashContainer } from './styles'

export const SplashScreen = ({ show }: { show: boolean }) => {
  const [animationFinished, setAnimationFinished] = React.useState(false)

  return (
    <SplashContainer
      style={{
        zIndex: animationFinished ? -1 : 1,
      }}
      from={{ opacity: 1 }}
      animate={{
        opacity: show ? 1 : 0,
      }}
      transition={{
        duration: 500,
      }}
      onDidAnimate={(
        styleProp,
        didAnimationFinish,
        maybeValue,
        { attemptedValue }
      ) => {
        setAnimationFinished(attemptedValue === 0 ? true : false)
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
