import { ProductOrNull } from '@screens/HomeScreen/types'

export type ProductCardProps = {
  product: ProductOrNull
  index: number
  hideButton?: boolean
  height?: number
  width?: number
  titleNumberOfLines?: number
}
