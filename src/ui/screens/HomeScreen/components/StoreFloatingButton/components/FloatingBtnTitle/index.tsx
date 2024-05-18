import React from 'react'
import { useSelector } from 'react-redux'

import { selectTotalPrice, selectTotalQuantity } from '@store/slices/cartSlice'

import {
  Price,
  Quantity,
  QuantityWrapper,
  Title,
  TitleContainer,
  TitleWrapper,
} from './styles'

export const FloatingBtnTitle = () => {
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalPrice = useSelector(selectTotalPrice)
  return (
    <TitleContainer>
      <QuantityWrapper>
        <Quantity>{totalQuantity}</Quantity>
      </QuantityWrapper>
      <TitleWrapper>
        <Title>Cart</Title>
      </TitleWrapper>
      <Price>${totalPrice}₦</Price>
    </TitleContainer>
  )
}
