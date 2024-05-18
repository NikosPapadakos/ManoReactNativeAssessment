import { ParamListBase } from '@react-navigation/native'
import { Product } from '@services/apis/productsApi/types'

import { SCREEN_NAMES } from './screenNames'

export type AppParamList = {
  [SCREEN_NAMES.App.HomeScreen]: undefined
  [SCREEN_NAMES.App.ProductDetailsScreen]: { product_id: Product['id'] }
} & ParamListBase
