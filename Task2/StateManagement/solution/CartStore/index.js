/* eslint-disable */
import { action, makeObservable, observable } from 'mobx'

class CartClass {
  cartItems = []

  constructor() {
    makeObservable(this, {
      cartItems: observable,
      addToCart: action,
      removeFromCart: action,
    })
  }

  addToCart(product) {
    this.cartItems.push(product)
  }

  removeFromCart(productId) {
    const index = this.cartItems.findIndex((item) => item.id === productId)
    if (index === -1) return

    this.cartItems.splice(index, 1)
  }
}

export const CartStore = new CartClass()
