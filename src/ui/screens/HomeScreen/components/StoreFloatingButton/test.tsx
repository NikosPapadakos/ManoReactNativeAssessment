import React from 'react'

import { renderWithProviders } from '@store/mock'
import { fireEvent } from '@testing-library/react-native'

import { StoreFloatingButton } from './'

describe('StoreFloatingButton', () => {
  const component = <StoreFloatingButton />

  it('renders correctly', () => {
    const { getByTestId } = renderWithProviders(component)
    const button = getByTestId('store-floating-button')
    expect(button).toBeTruthy()
  })

  it('opens cart modal when clicked', () => {
    const { getByTestId } = renderWithProviders(component)
    const button = getByTestId('store-floating-button')
    fireEvent.press(button)

    const cartModal = getByTestId('cart-modal')
    expect(cartModal).toBeTruthy()
  })
})
