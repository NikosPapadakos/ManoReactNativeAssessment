import { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@services/apis/productsApi/types'

import { CartItem, CartState } from './types'

export const addToCart = (
  state: CartState,
  action: PayloadAction<{ product: CartItem; quantity: number }>
) => {
  const { product, quantity } = action.payload
  const existingProduct = state.products.find((p) => p.id === product.id)
  if (existingProduct && existingProduct?.cartQuantity !== undefined) {
    existingProduct.cartQuantity += quantity
    return
  }
  state.products.push({ ...product, cartQuantity: quantity })
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
