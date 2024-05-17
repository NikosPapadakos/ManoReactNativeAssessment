import { ImageSourcePropType } from 'react-native'

import MANO_LOGO from '@assets/images/mano-logo-with-title.png'
import { COLORS } from '@theme/colors'
import styled from 'styled-components/native'

export const SplashContainer = styled.View`
  background-color: ${COLORS.BACKGROUND.TOTAL_WHITE};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const InnerWrapper = styled.View`
  justify-content: center;
`

export const Logo = styled.Image.attrs({
  source: MANO_LOGO as ImageSourcePropType,
  resizeMode: 'contain',
})`
  width: 200px;
  height: 200px;
  margin-right: 13px;
`
