import { SafeArea } from '@components/SafeArea'
import { SPACES } from '@theme'
import styled from 'styled-components/native'

export const StyledSafeArea = styled(SafeArea)`
  padding: 0px;
`

export const GoBack = styled.TouchableOpacity`
  padding: ${SPACES.xxl}px;
  position: absolute;
  z-index: 1;
`

export const ProductImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 300px;
  margin-top: ${SPACES['4xl']}px;
  margin-bottom: ${SPACES['4xl']}px;
`
