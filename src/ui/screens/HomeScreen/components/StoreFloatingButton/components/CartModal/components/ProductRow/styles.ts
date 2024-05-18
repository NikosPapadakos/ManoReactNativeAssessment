import { CustomButton } from '@components/CustomButton'
import { SPACES } from '@theme'
import { H4, P1, P3 } from '@theme/typography'
import styled from 'styled-components/native'

export const ProductRowStyle = styled.View`
  margin-top: ${SPACES.lg}px;
  flex-direction: row;
  gap: ${SPACES.lg}px;
`

export const ProductImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 50px;
  width: 50px;
`

export const DetailsCol = styled.View``

export const DetailsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProductTitle = styled(P1)`
  width: 200px;
`

export const ProductPrice = styled(H4)``

export const PlusMinusBtn = styled(CustomButton)`
  height: 24px;
  width: 24px;
  padding: 0px;
  padding-top: 3px;
  padding-left: 1px;
  border-radius: 5px;
  justify-content: center;
  justify-content: center;
  align-items: center;
`

export const ItemQuantity = styled(P3)`
  margin: 0px ${SPACES.md}px;
`
