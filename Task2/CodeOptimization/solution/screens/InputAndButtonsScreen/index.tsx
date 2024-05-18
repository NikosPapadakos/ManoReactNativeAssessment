import React, { useCallback, useState } from 'react'

import { Button } from '../../components/Button'
import { Container, StyledInput } from './styles'
import { InputAndButtonsScreenProps } from './types'

export const Screen = ({ navigation }: InputAndButtonsScreenProps) => {
  const [name, setName] = useState('')

  const submitName = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    navigation.navigate('AnotherScreen', { name })
  }, [name, navigation])

  const reset = useCallback(() => {
    setName('')
  }, [])

  return (
    <Container>
      <StyledInput value={name} onChangeText={(text) => setName(text)} />
      <Button onPress={submitName} title='DONE' />
      <Button onPress={reset} title='RESET' />
    </Container>
  )
}
