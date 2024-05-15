module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/ui/components',
          '@screens': './src/ui/screens',
          '@theme': './src/ui/theme',
          '@utils': './src/utils',
          '@navigation': './src/ui/navigation',
          '@assets': './assets',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@store': './src/store',
          'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
}
