import { Platform } from 'react-native'

import { CustomButton } from '@components/CustomButton'
import { BORDER_RADII, COLORS, SCREEN_SPACING, SPACES } from '@theme'
import { RoundedDarkShadowedCard } from '@theme/cards'
import { H3, H4 } from '@theme/typography'
import styled from 'styled-components/native'

export const Card = styled(RoundedDarkShadowedCard)<{
  index: number
}>`
  background-color: ${COLORS.WHITE.TOTAL_WHITE};
  margin: ${({ index }) => {
    if (index % 2 === 0) {
      return `${SPACES.md}px ${SPACES.lg}px ${SPACES.md}px ${SCREEN_SPACING.SCREEN_SIDE}px`
    }
    return `${SPACES.md}px ${SCREEN_SPACING.SCREEN_SIDE}px ${SPACES.md}px ${SPACES.lg}px`
  }};
`

export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: ${BORDER_RADII.CARD_RADIUS}px ${BORDER_RADII.CARD_RADIUS}px 0px
    0px;
`

export const BgImageStyle = `
  width: 100%;
  height: 100%;
`

export const BgImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  ${BgImageStyle}
`

export const PriceBubble = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 100px;
  padding: ${SPACES.sm}px ${SPACES.md}px;
  background-color: ${COLORS.PRIMARY.RED};
`

export const Price = styled(H3)`
  color: ${COLORS.WHITE.TOTAL_WHITE};
`

export const ContentWrapperStyle = `
  padding: ${SPACES.lg}px;`

export const ContentWrapper = styled.View`
  ${ContentWrapperStyle}
`

export const Title = styled(H4)``

export const StyledButton = styled(CustomButton)`
  padding: ${SPACES.lg}px ${SPACES.md}px
    ${Platform.OS === 'ios' ? SPACES.lg : SPACES.md}px ${SPACES.md}px;
  margin-top: ${SPACES.md}px;
`
