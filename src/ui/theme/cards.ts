import { View } from 'react-native'

import { BORDER_RADII, BOX_SHADOWS } from '@theme'
import styled from 'styled-components/native'

export const LightShadowedCard = styled(View)`
  ${BOX_SHADOWS.CARD_SHADOW_LIGHT}
`

export const DarkShadowed = styled(View)`
  ${BOX_SHADOWS.CARD_SHADOW_DARK}
`

export const RoundedCard = styled(View)`
  border-radius: ${BORDER_RADII.CARD_RADIUS}px;
`

export const RoundedLightShadowedCard = styled(LightShadowedCard)`
  border-radius: ${BORDER_RADII.CARD_RADIUS}px;
`

export const RoundedDarkShadowedCard = styled(DarkShadowed)`
  border-radius: ${BORDER_RADII.CARD_RADIUS}px;
`
