import { ImageSourcePropType } from 'react-native'

import EmptyListImg from '@assets/images/no-results.png'
import { COLORS, SPACES } from '@theme'
import { H3, P2 } from '@theme/typography'
import styled from 'styled-components/native'

export const ListEmptyComponentContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${SPACES['8xl']}px;
`
export const ListEmptyComponentImage = styled.Image.attrs({
  source: EmptyListImg as ImageSourcePropType,
  resizeMode: 'contain',
})`
  width: 200px;
  height: 200px;
`

export const ListEmptyComponentText = styled(H3)`
  margin-top: ${SPACES.lg}px;
  text-align: center;
`

export const ListEmptyComponentError = styled(P2)`
  margin-top: ${SPACES.lg}px;
  color: ${COLORS.TEXT.BLACK_65};
  text-align: center;
`
