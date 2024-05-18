import React from 'react'

import { SuggestedProductsSlider } from '@screens/ProductDetailsScreen/components/SuggestedProductsSlider'
import {
  Product,
  ProductFromIdResponse,
} from '@services/apis/productsApi/types'

import {
  ProductPrice,
  ProductTitle,
  StyledScrollView,
  StyledShadow,
} from './styles'

export const ProductDetailsScrollView = ({
  product,
  similarProducts,
}: {
  product?: ProductFromIdResponse
  similarProducts: Array<Product>
}) => {
  if (!product) return null

  return (
    <StyledShadow>
      <StyledScrollView>
        <ProductTitle>{product.data.title}</ProductTitle>
        <ProductPrice>{product.data.price}₦/item</ProductPrice>
        <SuggestedProductsSlider products={similarProducts} />
      </StyledScrollView>
    </StyledShadow>
  )
}
