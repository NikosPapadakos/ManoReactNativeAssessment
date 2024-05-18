import React, { useCallback, useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '@screens/screenNames'
import { AppParamList } from '@screens/types'
import { Product } from '@services/apis/productsApi/types'
import { addProduct } from '@store/slices/cartSlice'

import {
  AddProductBtn,
  AddToCartSectionContainer,
  OuterContainer,
  PlusMinusBtn,
  Quantity,
  QuantityContainer,
} from './styles'

export const AddToCartSection = ({ product }: { product: Product }) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>()

  const [quantity, setQuantity] = useState(1)

  const onMinusPress = useCallback(() => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }, [quantity])

  const onPlusPress = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const dispatch = useDispatch()

  const handleAddProduct = useCallback(() => {
    dispatch(addProduct({ product, quantity }))
    setQuantity(1)
    navigation.navigate(SCREEN_NAMES.App.HomeScreen)
  }, [dispatch, product, quantity, navigation])

  return (
    <OuterContainer>
      <Shadow>
        <AddToCartSectionContainer
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <QuantityContainer>
            <PlusMinusBtn
              testID='plus-btn'
              type='primary'
              onPress={onPlusPress}
              title='+'
            />
            <Quantity>{quantity}</Quantity>
            <PlusMinusBtn
              testID='minus-btn'
              type='primary'
              onPress={onMinusPress}
              title='-'
            />
          </QuantityContainer>
          <AddProductBtn
            type='primary'
            onPress={handleAddProduct}
            title='Add to cart'
            testID='add-product-btn'
          />
        </AddToCartSectionContainer>
      </Shadow>
    </OuterContainer>
  )
}
