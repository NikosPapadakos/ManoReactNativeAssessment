import {
  BORDER_RADII,
  COLORS,
  FONTS,
  FONT_SCALE,
  LETTER_SPACING,
  LINE_HEIGHT,
  SPACES,
} from '@theme'

export const PrimaryButtonStyle = `
  background-color: ${COLORS.PRIMARY.RED};
  align-items: center;
  justify-content: center;
  padding: ${SPACES.xxl}px;
  width: 100%;
  border-radius: ${BORDER_RADII.BUTTON_RADIUS}px;
`

export const PrimaryTextStyle = `
  color: ${COLORS.WHITE.TOTAL_WHITE};
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.BODY.P1}px;
  line-height: ${LINE_HEIGHT.BODY.P3}px;
`

export const SecondaryButtonStyle = `
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${SPACES.xxl}px;
  border-width: 1px;
  border-color: ${COLORS.PRIMARY.RED};
  border-radius: ${BORDER_RADII.BUTTON_RADIUS}px;
`

export const SecondaryButtonTextStyle = `
  color: ${COLORS.PRIMARY.RED};
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.BODY.P1}px;
  letter-spacing: ${LETTER_SPACING.BODY.P3}px;
  border-radius: ${BORDER_RADII.BUTTON_RADIUS}px;
`
