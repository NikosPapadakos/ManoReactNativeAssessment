import { SafeAreaView, ScrollView, View } from 'react-native'

import { COLORS, MAX_COMPONENT_WIDTH, SCREEN_SPACING } from '@theme'
import styled from 'styled-components/native'

export const MaxWidthComponent = styled(View)`
  max-width: ${MAX_COMPONENT_WIDTH}px;
`

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${COLORS.BACKGROUND.TOTAL_WHITE};
`

export const SafeAreaContentWrapper = styled(View)`
  flex: 1;
  background-color: inherit;
  padding-left: ${SCREEN_SPACING.SCREEN_SIDE}px;
  padding-right: ${SCREEN_SPACING.SCREEN_SIDE}px;
`

export const ContentCentered = styled(MaxWidthComponent)`
  align-items: center;
  justify-content: center;
`

export const PaddingTopContainerForContent = styled(View)<{
  hasLogo?: boolean | undefined
}>`
  padding-top: ${(props) =>
    props.hasLogo === true
      ? SCREEN_SPACING.SCREEN_TOP_WITH_LOGO
      : SCREEN_SPACING.SCREEN_TOP_WITHOUT_LOGO}px;
`

export const GrowingScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 35,
  },
})``
