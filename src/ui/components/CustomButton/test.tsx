import React from 'react'

import { fireEvent, render } from '@testing-library/react-native'

import { CustomButton } from './index'
import { ButtonsTypes } from './types'

describe('CustomButton', () => {
  const mockOnPress = jest.fn()

  const createCustomButton = (type: ButtonsTypes, title: string) => {
    return <CustomButton type={type} title={title} onPress={mockOnPress} />
  }

  it('renders correctly with primary type', () => {
    const { getByTestId } = render(
      createCustomButton('primary', 'Primary Button')
    )
    const customButton = getByTestId('custom-button')
    expect(customButton).toBeDefined()
  })

  it('renders correctly with text type', () => {
    const { getByTestId } = render(
      createCustomButton('secondary', 'Text Button')
    )
    const customButton = getByTestId('custom-button')
    expect(customButton).toBeDefined()
  })

  it('triggers onPress function when clicked', () => {
    const { getByTestId } = render(createCustomButton('primary', 'Click Me'))
    const customButton = getByTestId('custom-button')
    fireEvent.press(customButton)
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
