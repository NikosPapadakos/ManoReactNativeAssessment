import React from 'react'

import { ProductCard } from '@components/ProductCard'
import { Product } from '@services/apis/productsApi/types'
import { SPACES, Spacer } from '@theme'

import { Slider, SliderContainer, SliderTitle } from './styles'

export const SuggestedProductsSlider = ({
  products,
}: {
  products: Array<Product>
}) => {
  return (
    <SliderContainer>
      <SliderTitle>Users also select:</SliderTitle>
      <Slider
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item as Product}
            index={-1}
            hideButton
            width={150}
            height={220}
            titleNumberOfLines={2}
          />
        )}
        keyExtractor={(item, index) =>
          index.toString() + (item as Product)?.id.toString() ??
          '' + 'suggested'
        }
        estimatedItemSize={284}
        ItemSeparatorComponent={() => <Spacer horizontal size={SPACES.xxl} />}
      />
    </SliderContainer>
  )
}
