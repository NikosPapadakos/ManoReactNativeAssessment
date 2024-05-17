import { Dimensions, ImageSourcePropType } from 'react-native'

import MANO_LOGO from '@assets/images/mano-logo-with-title.png'
import { COLORS } from '@theme/colors'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

const { height, width } = Dimensions.get('window')

export const SplashContainer = styled(MotiView)`
  position: absolute;
  height: ${height}px;
  width: ${width}px;
  background-color: ${COLORS.BACKGROUND.TOTAL_WHITE};
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
