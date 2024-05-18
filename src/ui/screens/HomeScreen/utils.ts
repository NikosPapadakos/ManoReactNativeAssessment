import { ProductsArray } from './types'

export const filterProductsByTitle = (
  products: ProductsArray,
  query: string
): ProductsArray => {
  if (!query) {
    return products
  }

  return products.filter(
    (product) =>
      product === null ||
      product.title.toLowerCase().includes(query.toLowerCase())
  )
}
