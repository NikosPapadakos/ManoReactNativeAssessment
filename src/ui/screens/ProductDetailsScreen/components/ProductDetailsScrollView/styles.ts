import { Shadow } from 'react-native-shadow-2'

import { COLORS, SCREEN_SPACING, SPACES } from '@theme'
import { H2, P1 } from '@theme/typography'
import styled from 'styled-components/native'

export const StyledShadow = styled(Shadow).attrs({
  sides: {
    top: true,
    bottom: false,
    start: false,
    end: false,
  },
})`
  width: 100%;
`
export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: SPACES.xxxl,
    paddingBottom: 500,
    backgroundColor: COLORS.WHITE.LIGHT_WHITE,
  },
})``

const horizontalPadding = `padding: 0px ${SCREEN_SPACING.SCREEN_SIDE}px;`

export const ProductTitle = styled(H2)`
  ${horizontalPadding}
`

export const ProductPrice = styled(P1)`
  margin-bottom: ${SPACES.xxxl}px;
  ${horizontalPadding}
`
