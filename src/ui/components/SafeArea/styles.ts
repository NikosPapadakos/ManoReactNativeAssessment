import { SafeAreaView } from 'react-native-safe-area-context'

import { COLORS, SCREEN_SPACING } from '@theme'
import styled from 'styled-components/native'

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px ${SCREEN_SPACING.SCREEN_SIDE}px;
  background-color: ${COLORS.WHITE.LIGHT_WHITE};
`
