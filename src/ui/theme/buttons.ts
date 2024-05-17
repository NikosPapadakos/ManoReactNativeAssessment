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
  padding: ${SPACES.xxl}px ${SPACES['6xl']}px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: ${BORDER_RADII.BUTTON_RADIUS}px;
`

export const PrimaryTextStyle = `
  color: ${COLORS.BACKGROUND.TOTAL_WHITE};
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.BODY.P1}px;
  line-height: ${LINE_HEIGHT.BODY.P3}px;
`

export const TextButtonStyle = `
  justify-content: center;
  align-items: center;
  padding:20px;
`

export const TextButtonTextStyle = `
  color: ${COLORS.PRIMARY.RED};
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.BODY.P1}px;
  letter-spacing: ${LETTER_SPACING.BODY.P1}px;
`
