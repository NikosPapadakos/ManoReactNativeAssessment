import { FlashList } from '@shopify/flash-list'
import { SCREEN_SPACING, SPACES } from '@theme'
import { H3 } from '@theme/typography'
import styled from 'styled-components/native'

export const SliderContainer = styled.View``

export const SliderTitle = styled(H3)`
  padding: 0px ${SCREEN_SPACING.SCREEN_SIDE}px;
`

export const Slider = styled(FlashList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: SPACES.xxl,
    paddingRight: SPACES.xxl,
    paddingBottom: SPACES.xxl,
    paddingTop: SPACES.xxl,
  },
})``
