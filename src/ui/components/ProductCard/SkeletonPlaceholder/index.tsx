import React from 'react'
import { Platform } from 'react-native'

import { Skeletronize } from '@components/Skeletronize'
import { FONT_SCALE, SPACES, Spacer } from '@theme'

import { Card, ImageContainer, Title } from '../styles'
import { ProductCardProps } from '../types'
import { BgImageMock, MockContentWrapper } from './styles'

export const SkeletonPlaceholder = ({
  index,
}: {
  index: ProductCardProps['index']
}) => {
  const titleHeight = {
    height: FONT_SCALE.HEADINGS.H5,
  }

  const titlesSpacer =
    Platform.OS === 'ios' ? <Spacer size={SPACES.sm} /> : null

  return (
    <Skeletronize
      show
      customSkeletons={{
        'product-img': {
          radius: 0,
        },
        title: {
          ...titleHeight,
        },
        title2: {
          ...titleHeight,
        },
        title3: {
          width: '80%',
          ...titleHeight,
        },
      }}
    >
      <Card index={index}>
        <ImageContainer>
          <BgImageMock id='product-img' />
        </ImageContainer>
        <MockContentWrapper>
          <Title id='title' />
          {titlesSpacer}
          <Title id='title2' />
          {titlesSpacer}

          <Title id='title3' />
        </MockContentWrapper>
      </Card>
    </Skeletronize>
  )
}
