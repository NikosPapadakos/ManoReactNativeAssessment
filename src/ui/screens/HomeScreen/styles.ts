import { SafeArea } from '@components/SafeArea'
import { MasonryFlashList } from '@shopify/flash-list'
import { SPACES } from '@theme'
import styled from 'styled-components/native'

import { ListEmptyComponent } from './components/ListEmptyComponent'

export const StyledSafeArea = styled(SafeArea)`
  padding: 0px 0px;
`
export const List = styled(MasonryFlashList).attrs({
  contentContainerStyle: {
    paddingTop: SPACES.lg,
    paddingBottom: SPACES['8xl'],
  },
  estimatedItemSize: 225,
  numColumns: 2,
  ListEmptyComponent,
})``
