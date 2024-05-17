export const addOpacity = (color: string, opacity: number): string => {
  const opac = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + opac.toString(16).toUpperCase()
}

export const COLORS = {
  PRIMARY: {
    RED: '#E71233',
  },
  SUPPORTIVE: {},
  SKELETON_PALETTE: ['#D0D0D0', '#DFDFDF', '#F1F1F1', '#E9E9E9'],
  BACKGROUND: {
    TOTAL_WHITE: '#FFFFFF',
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
