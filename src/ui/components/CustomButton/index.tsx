import React from 'react'

import { ButtonTitle, CustomTouchableOpacity } from './styles'
import { ICustomButton } from './types'

/**
 *
 * @param title
 * @param type primary | text
 * @param textStyle
 * @param  TouchableOpacityProps
 *
 * @returns
 * A custom button with the style base on type
 */
export const CustomButton: React.FC<ICustomButton> = ({
  title,
  type,
  textStyle,
  titleNumberOfLines = 1,
  ...props
}) => {
  return (
    <CustomTouchableOpacity testID='custom-button' type={type} {...props}>
      {typeof title === 'string' ? (
        <ButtonTitle
          type={type}
          style={textStyle}
          numberOfLines={titleNumberOfLines}
        >
          {title}
        </ButtonTitle>
      ) : (
        title
      )}
    </CustomTouchableOpacity>
  )
}
