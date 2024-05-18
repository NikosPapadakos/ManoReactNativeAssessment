/* eslint-disable */
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'

type Props = {} & TextInputProps

const Input: React.FC<Props> = (props) => {
  return <TextInput {...props} />
}

const Screen: React.FC = ({ navigation }) => {
  const [name, setName] = useState('')

  const submitName = () => {
    navigation.navigate('AnotherScreen', { name })
  }

  const reset = () => {
    setName('')
  }

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={(text) => setName(text)} />
      <TouchableOpacity onPress={submitName}>
        <Text style={styles.title}>DONE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text style={styles.title}>RESET</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'red',
    marginVertical: 10,
  },
})

export default Screen
