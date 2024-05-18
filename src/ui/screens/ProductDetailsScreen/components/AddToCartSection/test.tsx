import React from 'react'

import { MOCK_PRODUCT_RES } from '@store/services/apis/productsApi/endpoints/getProductWithId/mock'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import { AddToCartSection } from './'

const mockProduct = MOCK_PRODUCT_RES.data

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}))

jest.mock('@store/slices/cartSlice', () => ({
  addProduct: jest.fn(),
}))

jest.mock('react-redux', () => ({
  useDispatch: jest.fn,
}))
describe('AddToCartSection', () => {
  it('should render correctly', () => {
    const { getByText } = render(<AddToCartSection product={mockProduct} />)

    expect(getByText('1')).toBeDefined()
  })

  it('should increase quantity when plus button is pressed', async () => {
    const { getByText, getByTestId } = render(
      <AddToCartSection product={mockProduct} />
    )

    fireEvent.press(getByTestId('plus-btn'))

    await waitFor(() => {
      expect(getByText('2')).toBeDefined()
    })
  })

  it('should decrease quantity when minus button is pressed', async () => {
    const { getByText, getByTestId } = render(
      <AddToCartSection product={mockProduct} />
    )
    fireEvent.press(getByTestId('plus-btn'))
    fireEvent.press(getByTestId('minus-btn'))
    await waitFor(() => {
      expect(getByText('1')).toBeDefined()
    })
  })

  it('should add product to cart when add product button is pressed', async () => {
    const { getByText, getByTestId } = render(
      <AddToCartSection product={mockProduct} />
    )

    fireEvent.press(getByTestId('add-product-btn'))

    await waitFor(() => {
      expect(getByText('1')).toBeDefined()
    })
  })
})
