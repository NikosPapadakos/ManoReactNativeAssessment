import React from 'react'

import { useGetAllProductsQuery } from '@store/services/apis/productsApi/index'
import { MotiView } from 'moti'

import {
  ListEmptyComponentContainer,
  ListEmptyComponentError,
  ListEmptyComponentImage,
  ListEmptyComponentText,
} from './styles'

export const ListEmptyComponent = () => {
  const { error } = useGetAllProductsQuery()
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
      {error !== undefined && (
        <ListEmptyComponentError>
          An unexpected error occurred while retrieving products. Please try
          again later.
        </ListEmptyComponentError>
      )}
    </ListEmptyComponentContainer>
  )
}
