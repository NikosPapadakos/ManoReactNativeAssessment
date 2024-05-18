import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native'

import {
  PrimaryButtonStyle,
  PrimaryTextStyle,
  SecondaryButtonStyle,
  SecondaryButtonTextStyle,
} from '@theme/buttons'

export type ButtonsTypes = 'primary' | 'secondary'
export type ButtonComponents = 'wrapper' | 'title'
export type ButtonComponentStyle = {
  wrapper: string
  title: string
}

export interface ICustomButton extends TouchableOpacityProps {
  type: ButtonsTypes
  title?: string | JSX.Element
  textStyle?: StyleProp<TextStyle>
  titleNumberOfLines?: number
}

export const ButtonsStyle: Record<ButtonsTypes, ButtonComponentStyle> = {
  primary: {
    wrapper: PrimaryButtonStyle,
    title: PrimaryTextStyle,
  },
  secondary: {
    wrapper: SecondaryButtonStyle,
    title: SecondaryButtonTextStyle,
  },
}
