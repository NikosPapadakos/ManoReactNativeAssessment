import { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@services/apis/productsApi/types'

import { CartItem, CartState } from './types'

export const addToCart = (
  state: CartState,
  action: PayloadAction<CartItem>
) => {
  const product = action.payload
  const existingProduct = state.products.find((p) => p.id === product.id)
  if (existingProduct && existingProduct?.cartQuantity !== undefined) {
    existingProduct.cartQuantity += 1
    return
  }
  state.products.push({ ...product, cartQuantity: 1 })
}

export const removeFromCart = (
  state: CartState,
  action: PayloadAction<Product['id']>
) => {
  const productId = action.payload
  const existingProduct = state.products.find((p) => p.id === productId)
  if (!existingProduct) return

  if (
    existingProduct?.cartQuantity !== undefined &&
    existingProduct?.cartQuantity > 1
  ) {
    existingProduct.cartQuantity -= 1
    return
  }
  state.products = state.products.filter((p) => p.id !== productId)
}
