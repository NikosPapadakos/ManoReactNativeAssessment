import React, { useCallback, useState } from 'react'

import { Icon } from './components/Icon'
import { Container, InputWrapper, SearchInput } from './styles'
import { SearchTextInputProps } from './types'

export const SearchTextInput = ({
  query,
  setQuery,
  ...rest
}: SearchTextInputProps) => {
  const [isActive, setIsActive] = useState(false)

  const onClearPressed = useCallback(() => {
    setQuery('')
  }, [])

  const onChange = useCallback((text: SearchTextInputProps['query']) => {
    setQuery(text)
  }, [])

  const onFocus = useCallback(() => {
    setIsActive(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsActive(false)
  }, [])

  return (
    <Container>
      <InputWrapper isActive={isActive}>
        <SearchInput
          testID='search-input'
          value={query}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoCapitalize='none'
          autoCorrect={false}
          {...rest}
        />
        <Icon query={query} onClear={onClearPressed} />
      </InputWrapper>
    </Container>
  )
}

export const inputRef = React.createRef()
