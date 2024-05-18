import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '@screens/screenNames'
import { AppParamList } from '@screens/types'

import { SkeletonPlaceholder } from './SkeletonPlaceholder'
import {
  BgImage,
  Card,
  ContentWrapper,
  ImageContainer,
  Price,
  PriceBubble,
  Title,
} from './styles'
import { ProductCardProps } from './types'

export const ProductCardComp = ({ product, index }: ProductCardProps) => {
  if (product === null) return <SkeletonPlaceholder index={index} />

  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>()

  const onPressCard = () => {
    navigation.navigate(SCREEN_NAMES.App.ProductDetailsScreen, {
      product_id: product?.id,
    })
  }

  return (
    <Card index={index}>
      <TouchableOpacity onPress={onPressCard} testID='card-btn'>
        <ImageContainer>
          <BgImage source={{ uri: product?.images?.[0]?.thumbnail }} />
          <PriceBubble>
            <Price>{Math.round(parseFloat(product?.price))}₦</Price>
          </PriceBubble>
        </ImageContainer>
        <ContentWrapper>
          <Title>{product?.title}</Title>
        </ContentWrapper>
      </TouchableOpacity>
    </Card>
  )
}

export const ProductCard = React.memo(ProductCardComp)
