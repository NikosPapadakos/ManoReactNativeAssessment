import { TextInputProps } from 'react-native'

export type SearchTextInputProps = TextInputProps & {
  query: string
  setQuery: (q: string) => void
}
