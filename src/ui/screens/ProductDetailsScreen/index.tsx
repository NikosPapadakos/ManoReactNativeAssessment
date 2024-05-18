import React, { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import ImageView from 'react-native-image-viewing'

import LeftArrow from '@assets/svg/left-arrow.svg'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppParamList } from '@screens/types'
import { Product } from '@services/apis/productsApi/types'
import {
  useGetAllProductsQuery,
  useGetProductWithIdQuery,
} from '@store/services/apis/productsApi/'
import { COLORS } from '@theme'

import { AddToCartSection } from './components/AddToCartSection'
import { ProductDetailsScrollView } from './components/ProductDetailsScrollView'
import { GoBack, ProductImg, StyledSafeArea } from './styles'
import { findSimilarProducts } from './utils'

export const ProductDetailsScreen = () => {
  const [imageViewingVisible, setImageViewingVisible] = useState(false)

  const route = useRoute<RouteProp<AppParamList, 'ProductDetailsScreen'>>()
  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>()

  const { data: allProductsRes, error } = useGetAllProductsQuery()
  const goBack = () => {
    navigation.goBack()
  }
  if (error !== undefined) {
    Alert.alert(
      'Error!',
      'An unexpected error occurred while retrieving the product. Please try again later.',
      [
        {
          text: 'OK',
          onPress: () => goBack(),
        },
      ]
    )

    return null
  }

  const { productId } = route.params

  const { data: product } = useGetProductWithIdQuery(productId)

  const imgUri = product?.data?.images?.[0]?.original ?? ''

  const similarProducts = findSimilarProducts(
    product?.data as Product,
    allProductsRes?.data?.items ?? []
  )

  return (
    <StyledSafeArea>
      {imgUri && (
        <ImageView
          images={[{ uri: imgUri }]}
          imageIndex={0}
          visible={imageViewingVisible}
          onRequestClose={() => setImageViewingVisible(false)}
          backgroundColor={COLORS.WHITE.TOTAL_WHITE}
        />
      )}

      {imgUri && (
        <TouchableOpacity onPress={() => setImageViewingVisible(true)}>
          <GoBack onPress={goBack}>
            <LeftArrow />
          </GoBack>
          <ProductImg source={{ uri: imgUri }} />
        </TouchableOpacity>
      )}

      <ProductDetailsScrollView
        product={product}
        similarProducts={similarProducts}
      />

      <AddToCartSection product={product?.data as Product} />
    </StyledSafeArea>
  )
}
