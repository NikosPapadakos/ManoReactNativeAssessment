export const addOpacity = (color: string, opacity: number): string => {
  const opac = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + opac.toString(16).toUpperCase()
}

export const COLORS = {
  PRIMARY: {
    BLUE_RIBBON: '#175FFF',
    BLUE_RIBBON_10: '#175fff1a',
  },
  SUPPORTIVE: {
    TOTAL_WHITE: '#FFFFFF',
    CERULEAN: '#00CBFF',
    BRIGHT_GREEN: '#84F22E',
    ELECTRIC_VIOLET: '#A14EFF',
    LIGHT_GRAY: '#DADADA',
    LIGHT_BLUE_RIBBON: '#EEF3FE',
    INPUT_STROKE: '#B9B8B9',
    PRIMITIVE_BLACK_10: '#E4E4E4',
    PRIMITIVE_BLACK_50: '#918F8F',
  },
  SKELETON_PALETTE: ['#D0D0D0', '#DFDFDF', '#F1F1F1', '#E9E9E9'],
  TOPTASK_SKELETON: { PRIMARY: '#D0D0D0', SECONDARY: '#E9E9E9' },
  BACKGROUND: {
    ANYTIME_WHITE: '#FAFAFA',
    ANYTIME_WHITE_75: '#FAFAFA75',
    LIGHT_WHITE: '#FCFCFC',
    ANYTIME_DARK_BLUE: '#00006E',
    LIGHT_RED: '#FDF2F3',
    LIGHT_GREEN: '#F0F5F0',
    LIGHT_BLUE: '#E7EFFF',
    ANYTIME: '#F0F0F0',
  },
  TEXT: {
    BLACK_100: '#231F20',
    BLACK_65: '#636061',
  },
  STATES: {
    ERROR: '#DA3832',
    SUCCESS: '#457B3B',
    DISABLED: '#BDBDBD',
  },
  ASSISTING: {
    PRIMARY10: '#175FFF1A',
    MOBILE_BLACK_10: '#231F200D',
  },
  BOX_SHADOWS: {
    LIGHT: { ios: '#B9B8B9', android: '#918F8F' },
    DARK: { ios: '#918F8F', android: '#000000' },
  },
}
