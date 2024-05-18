import React from 'react'

import { ButtonText, StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button = ({ onPress, title }: ButtonProps) => (
  <StyledButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
)
