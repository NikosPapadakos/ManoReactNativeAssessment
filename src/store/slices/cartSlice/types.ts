import { Product } from '@services/apis/productsApi/types'

export type CartItem = Product & { cartQuantity?: number }

export type CartState = {
  products: Array<CartItem>
}
