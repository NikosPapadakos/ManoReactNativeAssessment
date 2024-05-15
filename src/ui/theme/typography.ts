import { COLORS, FONTS, FONT_SCALE, LETTER_SPACING, LINE_HEIGHT } from '@theme'
import styled from 'styled-components/native'

export const tabLabelStyle = {
  fontFamily: FONTS.BOLD,
  fontSize: 12,
  lineHeight: LINE_HEIGHT.BODY.P3,
  letterSpacing: LETTER_SPACING.BODY.P1,
}

export const H1 = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H1}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H1}px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const H2styles = `
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H2}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H2}px;
  color: ${COLORS.TEXT.BLACK_100};
`
export const H2 = styled.Text`
  ${H2styles}
`

export const H3 = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H3}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H3}px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const H4styles = `
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H4}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H4}px;
  color: ${COLORS.TEXT.BLACK_100};

`

export const H4 = styled.Text`
  ${H4styles}
`

export const H5styles = `
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H5}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H5}px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const H5 = styled.Text`
  ${H5styles}
`

export const H6 = styled.Text`
  font-family: ${FONTS.BOLD};
  font-size: ${FONT_SCALE.HEADINGS.H6}px;
  line-height: ${LINE_HEIGHT.HEADINGS.H6}px;
  letter-spacing: 0.25px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const P1styles = `
  font-family: ${FONTS.REGULAR};
  font-size: ${FONT_SCALE.BODY.P1}px;
  line-height: ${LINE_HEIGHT.BODY.P1}px;
  letter-spacing: ${LETTER_SPACING.BODY.P1}px;
`

export const P1 = styled.Text`
  ${P1styles}
  color: ${COLORS.TEXT.BLACK_100};
`

export const P1_ITALIC = styled(P1)`
  font-family: ${FONTS.REGULAR_ITALIC};
`

export const P1_LIGHT = styled(P1)`
  font-family: ${FONTS.LIGHT};
`

export const P1_BOLD = styled(P1)`
  font-family: ${FONTS.BOLD};
`

export const P2 = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: ${FONT_SCALE.BODY.P2}px;
  line-height: ${LINE_HEIGHT.BODY.P2}px;
  letter-spacing: ${LETTER_SPACING.BODY.P2}px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const P2_ITALIC = styled(P2)`
  font-family: ${FONTS.REGULAR_ITALIC};
`

export const P2_LIGHT = styled(P2)`
  font-family: ${FONTS.LIGHT};
`

export const P2_BOLD = styled(P2)`
  font-family: ${FONTS.BOLD};
`

export const P3 = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: ${FONT_SCALE.BODY.P3}px;
  line-height: ${LINE_HEIGHT.BODY.P3}px;
  letter-spacing: ${LETTER_SPACING.BODY.P3}px;
  color: ${COLORS.TEXT.BLACK_100};
`

export const P3_ITALIC = styled(P3)`
  font-family: ${FONTS.REGULAR_ITALIC};
`

export const P3_LIGHT = styled(P3)`
  font-family: ${FONTS.LIGHT};
`

export const P3_BOLD = styled(P3)`
  font-family: ${FONTS.BOLD};
`
