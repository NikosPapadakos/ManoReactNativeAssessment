/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { MOCK_PRODUCTS_RES } from '@services/apis/productsApi/endpoints/getAllProducts/mock'
import { fireEvent, render } from '@testing-library/react-native'

import { ProductCardComp } from './'
import { SkeletonPlaceholder } from './SkeletonPlaceholder'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

jest.mock('./styles', () => ({
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
    render(<ProductCardComp product={null} index={0} />)
    expect(SkeletonPlaceholder).toHaveBeenCalledWith({ index: 0 }, {})
  })

  it('navigates to ProductDetailsScreen on card press', () => {
    const { getByTestId } = render(
      <ProductCardComp product={product} index={0} />
    )

    fireEvent.press(getByTestId('card-btn'))
    expect(mockNavigate).toHaveBeenCalledWith('ProductDetailsScreen', {
      product_id: product.id,
    })
  })
})
