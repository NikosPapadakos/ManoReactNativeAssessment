import React from 'react'
import { useDispatch } from 'react-redux'

import { addProduct, removeProduct } from '@store/slices/cartSlice'
import { CartItem } from '@store/slices/cartSlice/types'

import {
  DetailsCol,
  DetailsRow,
  ItemQuantity,
  PlusMinusBtn,
  ProductImg,
  ProductPrice,
  ProductRowStyle,
  ProductTitle,
} from './styles'

export const ProductRow = ({ product }: { product: CartItem }) => {
  const dispatch = useDispatch()

  const handleAddProduct = (prod: CartItem) => {
    dispatch(addProduct(prod))
  }

  const handleRemoveProduct = (productId: CartItem['id']) => {
    dispatch(removeProduct(productId))
  }

  return (
    <ProductRowStyle>
      <ProductImg source={{ uri: product?.images?.[0]?.thumbnail }} />
      <DetailsCol>
        <ProductTitle numberOfLines={1}>{product.title}</ProductTitle>
        <DetailsRow>
          <ProductPrice>{product.price}₦</ProductPrice>
          <DetailsRow>
            <PlusMinusBtn
              type='primary'
              title='+'
              onPress={() => handleAddProduct(product)}
            />
            <ItemQuantity>{product.cartQuantity}</ItemQuantity>

            <PlusMinusBtn
              title='-'
              type='primary'
              onPress={() => handleRemoveProduct(product.id)}
            />
          </DetailsRow>
        </DetailsRow>
      </DetailsCol>
    </ProductRowStyle>
  )
}
