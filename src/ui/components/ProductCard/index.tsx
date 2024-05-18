import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '@screens/screenNames'
import { AppParamList } from '@screens/types'
import { AppDispatch } from '@store/index'
import { addProduct } from '@store/slices/cartSlice'

import { SkeletonPlaceholder } from './SkeletonPlaceholder'
import {
  BgImage,
  Card,
  ContentWrapper,
  ImageContainer,
  Price,
  PriceBubble,
  StyledButton,
  Title,
} from './styles'
import { ProductCardProps } from './types'

export const ProductCardComp = ({
  product,
  index,
  hideButton = false,
  height = undefined,
  width = undefined,
  titleNumberOfLines = 5,
}: ProductCardProps) => {
  if (product === null) return <SkeletonPlaceholder index={index} />

  const dispatch: AppDispatch = useDispatch()

  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>()

  const onPressCard = () => {
    navigation.navigate(SCREEN_NAMES.App.ProductDetailsScreen, {
      productId: product?.id,
    })
  }

  const handleAddProduct = () => {
    dispatch(addProduct({ product, quantity: 1 }))
  }

  return (
    <Card index={index} height={height} width={width}>
      <TouchableOpacity onPress={onPressCard} testID='card-btn'>
        <ImageContainer>
          <BgImage source={{ uri: product?.images?.[0]?.thumbnail }} />
          <PriceBubble>
            <Price>{Math.round(parseFloat(product?.price))}₦</Price>
          </PriceBubble>
        </ImageContainer>
        <ContentWrapper>
          <Title numberOfLines={titleNumberOfLines}>{product?.title}</Title>
          {!hideButton && (
            <StyledButton
              testID='add-cart-btn'
              type='secondary'
              title='Add to cart'
              onPress={handleAddProduct}
            />
          )}
        </ContentWrapper>
      </TouchableOpacity>
    </Card>
  )
}

export const ProductCard = React.memo(ProductCardComp)
