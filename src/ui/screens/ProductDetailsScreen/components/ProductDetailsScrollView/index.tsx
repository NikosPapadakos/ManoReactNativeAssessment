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

  const { title, price } = product.data ?? { title: '', price: '' }

  return (
    <StyledShadow>
      <StyledScrollView>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}₦/item</ProductPrice>
        <SuggestedProductsSlider products={similarProducts} />
      </StyledScrollView>
    </StyledShadow>
  )
}
