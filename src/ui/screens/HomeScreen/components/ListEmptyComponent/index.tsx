import React from 'react'

import { MotiView } from 'moti'

import {
  ListEmptyComponentContainer,
  ListEmptyComponentImage,
  ListEmptyComponentText,
} from './styles'

export const ListEmptyComponent = () => {
  return (
    <ListEmptyComponentContainer>
      <MotiView
        from={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: 'spring',
          duration: 300,
        }}
      >
        <ListEmptyComponentImage />
      </MotiView>
      <ListEmptyComponentText>No products found</ListEmptyComponentText>
    </ListEmptyComponentContainer>
  )
}
