import { TextInputProps } from 'react-native'

import {
  BOX_SHADOWS,
  COLORS,
  FONTS,
  FONT_SCALE,
  LETTER_SPACING,
  SPACES,
} from '@theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  z-index: 1;
`
export const InputWrapper = styled.View<{ isActive: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 58px;
  padding: 0px ${SPACES.xxl}px;
  border-radius: 28px;
  border-width: 1px;
  border-color: ${({ isActive }) =>
    isActive ? COLORS.PRIMARY.RED : COLORS.WHITE.TOTAL_WHITE};
  background-color: ${COLORS.WHITE.TOTAL_WHITE};
  ${BOX_SHADOWS.CARD_SHADOW_DARK}
`

export const SearchInput = styled.TextInput.attrs(
  (): TextInputProps => ({
    placeholderTextColor: COLORS.TEXT.BLACK_65,
  })
)`
  flex: 1;
  margin-top: 3px;
  font-family: ${({ value }) => (value === '' ? FONTS.BOLD : FONTS.REGULAR)};
  font-size: ${FONT_SCALE.HEADINGS.H4}px;
  letter-spacing: ${LETTER_SPACING.BODY.P1}px;
  color: ${COLORS.TEXT.BLACK_100};
  height: 58px;
`
