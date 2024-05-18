import { DefaultTheme } from '@react-navigation/native'

import { COLORS } from './colors'

export const NAVIGATION_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    background: COLORS.WHITE.TOTAL_WHITE,
  },
}
