// Note: Box shadows in css format for use in styled components (not sure if possible) only (not for use in stylesheet)
import { Platform } from 'react-native'

import { COLORS } from './colors'

export const BOX_SHADOWS = {
  CARD_SHADOW_LIGHT: `
    shadow-color: ${COLORS.BOX_SHADOWS.LIGHT.ios};
    shadow-offset: 0px 6px;
    shadow-opacity: 0.37;
    shadow-radius: 7.49px;
    ${
      Platform.OS === 'android'
        ? `shadow-color: ${COLORS.BOX_SHADOWS.DARK.android};
    elevation: 6;`
        : ''
    }
  `,
  CARD_SHADOW_DARK: `
  shadow-color: ${COLORS.BOX_SHADOWS.DARK.ios};
  shadow-offset: 0px 6px;
  shadow-opacity: 0.37;
  shadow-radius: 7.49px;
  ${
    Platform.OS === 'android'
      ? `shadow-color: ${COLORS.BOX_SHADOWS.DARK.android};
  elevation: 6;`
      : ''
  }
`,
}

export const BOX_SHADOWS_REACT_STYLE = {
  CARD_SHADOW_LIGHT: {
    shadowColor: COLORS.BOX_SHADOWS.LIGHT.ios,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    ...(Platform.OS === 'android'
      ? {
          elevation: 6,
          backgroundColor: COLORS.BOX_SHADOWS.DARK.android, // Assuming backgroundColor is required for Android
        }
      : {}),
  },
  CARD_SHADOW_DARK: {
    shadowColor: COLORS.BOX_SHADOWS.DARK.ios,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    ...(Platform.OS === 'android'
      ? {
          elevation: 6,
          backgroundColor: COLORS.BOX_SHADOWS.DARK.android, // Assuming backgroundColor is required for Android
        }
      : {}),
  },
}
