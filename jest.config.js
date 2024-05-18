module.exports = {
  preset: 'react-native',
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|react-redux|@react-navigation|@rneui)/)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
}
