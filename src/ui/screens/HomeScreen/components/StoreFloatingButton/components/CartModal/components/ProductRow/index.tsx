import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppParamList } from '@screens/types'
import { addProduct, removeProduct } from '@store/slices/cartSlice'
import { CartItem } from '@store/slices/cartSlice/types'

import {
  DetailsCol,
  DetailsRow,
  ItemQuantity,
  PlusMinusBtn,
  ProductImg,
  ProductPrice,
  ProductRowStyle,
  ProductTitle,
} from './styles'

export const ProductRow = ({
  product,
  closeModal,
}: {
  product: CartItem
  closeModal: () => void
}) => {
  const dispatch = useDispatch()

  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>()
  const navigateToProductDetails = () => {
    closeModal()
    navigation.navigate('ProductDetailsScreen', {
      productId: product.id,
    })
  }

  const handleAddProduct = (prod: CartItem) => {
    dispatch(
      addProduct({
        product: prod,
        quantity: 1,
      })
    )
  }

  const handleRemoveProduct = (productId: CartItem['id']) => {
    dispatch(removeProduct(productId))
  }

  return (
    <ProductRowStyle>
      <TouchableOpacity onPress={navigateToProductDetails}>
        <ProductImg source={{ uri: product?.images?.[0]?.thumbnail }} />
      </TouchableOpacity>
      <DetailsCol>
        <ProductTitle numberOfLines={1}>{product.title}</ProductTitle>
        <DetailsRow>
          <ProductPrice>{product.price}₦</ProductPrice>
          <DetailsRow>
            <PlusMinusBtn
              type='primary'
              title='+'
              onPress={() => handleAddProduct(product)}
            />
            <ItemQuantity>{product.cartQuantity}</ItemQuantity>

            <PlusMinusBtn
              title='-'
              type='primary'
              onPress={() => handleRemoveProduct(product.id)}
            />
          </DetailsRow>
        </DetailsRow>
      </DetailsCol>
    </ProductRowStyle>
  )
}
