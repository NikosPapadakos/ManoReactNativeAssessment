import { ButtonComponentStyle, ButtonComponents, ButtonsTypes } from './types'

export const findStyle = (
  type: ButtonsTypes,
  component: ButtonComponents,
  buttonsStyle: Record<ButtonsTypes, ButtonComponentStyle>
): string => buttonsStyle[type][component] ?? ''
