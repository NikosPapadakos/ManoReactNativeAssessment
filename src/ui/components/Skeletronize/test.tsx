/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Text } from 'react-native'

import { render } from '@testing-library/react-native'
import { Skeleton } from 'moti/skeleton'

import { Skeletronize } from './'

describe('Skeletronize Component', () => {
  afterEach(() => {
    jest.clearAllMocks() // Clear mock calls after each test
  })

  it('renders correctly without ids', () => {
    const { getByTestId } = render(
      <Skeletronize show customSkeletons={{}}>
        <Text testID='test-child'>Child Component</Text>
      </Skeletronize>
    )

    expect(getByTestId('test-child')).toBeDefined()
  })

  it('renders correctly with customSkeletons and ids', () => {
    const { getByTestId } = render(
      <Skeletronize show customSkeletons={{ test: { width: 200 } }}>
        <Text testID='test-child' id='test'>
          Child Component
        </Text>
      </Skeletronize>
    )

    expect(Skeleton).toHaveBeenCalled() // Ensure Skeleton component is called
    expect(getByTestId('test-child')).toBeDefined()
    expect((Skeleton as any)?.mock.calls[0][0].children.props.id).toBe('test') // Ensure the child component is passed as a child to Skeleton
    expect((Skeleton as any)?.mock.calls[0][0].width).toBe(200) // Ensure the customSkeletons prop is passed to Skeleton
  })
})
