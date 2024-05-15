import styled from 'styled-components/native'

import { SPACES } from './spacing'

type Size = keyof typeof SPACES | number

const getVariant = (size: Size, horizontal: boolean | undefined) => {
  const value = typeof size === 'number' ? size : SPACES[size]

  return `
    width: ${horizontal === true ? `${value}px` : 'auto'};
    height: ${horizontal === true ? 'auto' : `${value}px`};
  `
}

export const Spacer = styled.View<{ size: Size; horizontal?: boolean }>`
  ${({ size, horizontal }) => getVariant(size, horizontal)}
`
