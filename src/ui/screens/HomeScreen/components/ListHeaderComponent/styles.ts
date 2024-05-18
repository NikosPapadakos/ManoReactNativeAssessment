import { ImageSourcePropType } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import Logo from '@assets/images/logo-title.png'
import { SCREEN_SPACING, SPACES } from '@theme'
import { H2, H4 } from '@theme/typography'
import styled from 'styled-components/native'

export const StyledShadow = styled(Shadow).attrs({
  sides: {
    top: false,
    bottom: true,
    start: false,
    end: false,
  },
})`
  width: 100%;
  margin-bottom: ${SPACES.xl}px;
`

export const ListHeaderContainer = styled.View`
  padding: ${SPACES.xxxl}px ${SCREEN_SPACING.SCREEN_SIDE}px ${SPACES.xl}px
    ${SCREEN_SPACING.SCREEN_SIDE}px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled(H2)``

export const LogoTitle = styled.Image.attrs({
  source: Logo as ImageSourcePropType,
  resizeMode: 'contain',
})`
  height: 30px;
  width: 80px;
`

export const Slogan = styled(H4)``
