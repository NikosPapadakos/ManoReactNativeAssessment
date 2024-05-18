import { Text, TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'

import { ButtonsStyle, ICustomButton } from './types'
import { findStyle } from './utils'

export const CustomTouchableOpacity = styled(TouchableOpacity)<ICustomButton>`
  ${({ type }) => findStyle(type, 'wrapper', ButtonsStyle)}
  width:100%;
  opacity: ${({ disabled }) => (disabled ?? false ? 0.5 : 1)};
`
export const ButtonTitle = styled(Text)<ICustomButton>`
  ${({ type }) => findStyle(type, 'title', ButtonsStyle)}
`
