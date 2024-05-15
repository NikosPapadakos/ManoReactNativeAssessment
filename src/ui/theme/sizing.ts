import { Dimensions } from 'react-native'

import { SCREEN_SPACING } from './spacing'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_SIDE_MARGIN = SCREEN_SPACING.SCREEN_SIDE * 2

export const MAX_COMPONENT_WIDTH =
  Dimensions.get('window').width + SCREEN_SIDE_MARGIN < 390
    ? 350
    : SCREEN_WIDTH - SCREEN_SIDE_MARGIN
