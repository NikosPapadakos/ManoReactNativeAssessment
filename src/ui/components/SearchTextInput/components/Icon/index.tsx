import React from 'react'
import { TouchableOpacity } from 'react-native'

import { CloseIcon, SearchIcon } from './styles'

export const Icon = ({
  query,
  onClear,
}: {
  query: string
  onClear: () => void
}) => {
  return query === '' ? (
    <SearchIcon />
  ) : (
    <TouchableOpacity testID='clear-button' onPress={onClear}>
      <CloseIcon />
    </TouchableOpacity>
  )
}
