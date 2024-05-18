/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { renderWithProviders } from '@store/mock'
import { MOCK_PRODUCTS_RES } from '@store/services/apis/productsApi/endpoints/getAllProducts/mock'
import { addProduct } from '@store/slices/cartSlice'
import { fireEvent } from '@testing-library/react-native'

import { ProductCardComp } from './'
import { SkeletonPlaceholder } from './SkeletonPlaceholder'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockDispatch),
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

jest.mock('./styles', () => ({
  ...jest.requireActual('./styles'),
  BgImage: jest.fn(() => null),
  Card: jest.fn(({ children }) => children),
  ContentWrapper: jest.fn(({ children }) => children),
  ImageContainer: jest.fn(({ children }) => children),
  Price: jest.fn(({ children }) => <>{children}</>),
  PriceBubble: jest.fn(({ children }) => children),
  Title: jest.fn(({ children }) => <>{children}</>),
}))

jest.mock('./SkeletonPlaceholder', () => ({
  SkeletonPlaceholder: jest.fn(() => null),
}))

describe('ProductCardComp', () => {
  const mockNavigate = jest.fn()
  const product = MOCK_PRODUCTS_RES.data.items[0]

  beforeEach(() => {
    ;(useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders SkeletonPlaceholder when product is null', () => {
    renderWithProviders(<ProductCardComp product={null} index={0} />)
    expect(SkeletonPlaceholder).toHaveBeenCalledWith({ index: 0 }, {})
  })

  it('navigates to ProductDetailsScreen on card press', () => {
    const { getByTestId } = renderWithProviders(
      <ProductCardComp product={product} index={0} />
    )

    fireEvent.press(getByTestId('card-btn'))
    expect(mockNavigate).toHaveBeenCalledWith('ProductDetailsScreen', {
      productId: product.id,
    })
  })

  it('dispatches addProduct action on add to cart button press', () => {
    const { getByTestId } = renderWithProviders(
      <ProductCardComp product={product} index={0} />
    )

    const addButton = getByTestId('add-cart-btn')
    fireEvent.press(addButton)
    expect(mockDispatch).toHaveBeenCalledWith(
      addProduct({ product, quantity: 1 })
    )
  })
})
