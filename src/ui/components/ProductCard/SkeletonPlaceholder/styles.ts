import { Platform } from 'react-native'

import { SPACES } from '@theme'
import styled from 'styled-components/native'

import { BgImageStyle, ContentWrapperStyle } from '../styles'

export const BgImageMock = styled.View`
  ${BgImageStyle}
`

export const MockContentWrapper = styled.View`
  ${ContentWrapperStyle}
  ${Platform.OS === 'android' && `padding-bottom: ${SPACES.sm}px;`}
`
