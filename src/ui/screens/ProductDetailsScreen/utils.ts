import { Product } from '@services/apis/productsApi/types'

export const findSimilarProducts = (
  originalProduct: Product,
  allProducts: Array<Product>
) => {
  if (
    originalProduct?.categories === undefined ||
    originalProduct.categories.length === 0
  ) {
    return []
  }

  const categoryId = originalProduct.categories[0].id

  const filteredProducts = allProducts.filter(
    (product) =>
      product.id !== originalProduct.id &&
      product.categories.some((category) => category.id === categoryId)
  )

  if (filteredProducts.length <= 2) {
    return filteredProducts.concat(allProducts.slice(0, 5))
  }

  return filteredProducts
}
