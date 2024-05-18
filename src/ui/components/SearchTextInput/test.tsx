import React from 'react'

import { act, fireEvent, render, waitFor } from '@testing-library/react-native'

import { SearchTextInput } from '../SearchTextInput'

let query = ''

const setQuery = (text: string) => {
  query = text
}

describe('SearchTextInput', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <SearchTextInput query={query} setQuery={setQuery} />
    )

    expect(getByTestId('search-input')).toBeDefined()
  })

  it('should call setQuery when text is changed', async () => {
    const { getByTestId } = render(
      <SearchTextInput query={query} setQuery={setQuery} />
    )

    const input = getByTestId('search-input')

    await act(() => {
      fireEvent.changeText(input, 'test')
    })

    await waitFor(() => {
      expect(query).toBe('test')
    })
  })

  it('should call setQuery when text is cleared', async () => {
    const { getByTestId } = render(
      <SearchTextInput query={query} setQuery={setQuery} />
    )

    const input = getByTestId('search-input')

    await act(() => {
      fireEvent.changeText(input, 'test')
    })

    await act(() => {
      fireEvent.press(getByTestId('clear-button'))
    })

    await waitFor(() => {
      expect(query).toBe('')
    })
  })
})
