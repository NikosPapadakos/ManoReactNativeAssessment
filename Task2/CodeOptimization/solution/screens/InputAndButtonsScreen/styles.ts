import styled from 'styled-components/native'

import { Input } from '../../components/Input'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const StyledInput = styled(Input)`
  width: 80%;
  padding: 10px;
  margin-vertical: 10px;
  border-width: 1px;
  border-color: gray;
`
