import React from 'react'

import { SearchTextInput } from '@components/SearchTextInput'
import { SearchTextInputProps } from '@components/SearchTextInput/types'
import { SPACES, Spacer } from '@theme'

import {
  ListHeaderContainer,
  LogoTitle,
  Row,
  Slogan,
  StyledShadow,
  Title,
} from './styles'

export const ListHeaderComponent = ({
  query,
  setQuery,
}: SearchTextInputProps) => {
  return (
    <StyledShadow>
      <ListHeaderContainer>
        <Row>
          <Title>Welcome to, </Title>
          <LogoTitle />
        </Row>
        <Spacer size={SPACES.sm} />
        <Slogan>Products you love, delivered in minutes!</Slogan>
        <Spacer size={SPACES.xl} />
        <SearchTextInput
          placeholder='Search for products'
          query={query}
          setQuery={setQuery}
        />
      </ListHeaderContainer>
    </StyledShadow>
  )
}
