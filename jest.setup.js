const withDisplayName = (Component, name) => {
  Component.displayName = name
  return Component
}

jest.mock('moti', () => {
  const React = require('react')
  const View = require('react-native').View
  return {
    MotiView: (props) => React.createElement(View, props, props.children),
  }
})

jest.mock('moti/skeleton', () => {
  const Skeleton = jest.fn().mockImplementation(({ children }) => children)
  Skeleton.Group = jest.fn().mockImplementation(({ children }) => children)
  Skeleton.displayName = 'Skeleton'

  return {
    __esModule: true,
    Skeleton: withDisplayName(Skeleton),
  }
})
