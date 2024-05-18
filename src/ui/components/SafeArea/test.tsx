import React from 'react'
import { Text } from 'react-native'

import { render } from '@testing-library/react-native'

import { SafeArea } from './'

describe('SafeArea', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <SafeArea>
        <Text>Test Child</Text>
      </SafeArea>
    )

    expect(getByText('Test Child')).toBeTruthy()
  })

  it('passes props to SafeAreaContainer', () => {
    const { getByTestId } = render(
      <SafeArea style={{ backgroundColor: 'red' }}>
        <Text>Test Child</Text>
      </SafeArea>
    )

    const container = getByTestId('safe-area')
    expect(container.props.style).toMatchObject([
      {
        backgroundColor: '#FAFAFA',
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 1,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
      },
      { backgroundColor: 'red' },
    ])
  })
})
