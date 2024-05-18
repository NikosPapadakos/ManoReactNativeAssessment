import { products } from './productsApi'

export const rtkReducer = {
  [products.reducerPath]: products.reducer,
}

export const rtkMiddleware = [products.middleware]
