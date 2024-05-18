import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@store'

import { CartState } from './types'
import { addToCart, removeFromCart } from './utils'

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: addToCart,
    removeProduct: removeFromCart,
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export const selectTotalQuantity = (state: RootState): number =>
  state.cart.products.reduce(
    (total, product) => total + (product.cartQuantity ?? 0),
    0
  )

export const selectTotalPrice = (state: RootState): number =>
  state.cart.products.reduce(
    (total, product) =>
      total + parseFloat(product.price) * (product.cartQuantity ?? 0),
    0
  )

export const cartReducer = cartSlice.reducer
