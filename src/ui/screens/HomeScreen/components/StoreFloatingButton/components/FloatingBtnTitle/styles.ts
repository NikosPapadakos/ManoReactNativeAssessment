import { ButtonsStyle } from '@components/CustomButton/types'
import { COLORS } from '@theme'
import { H4 } from '@theme/typography'
import styled from 'styled-components/native'

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
`

export const Title = styled.Text`
  ${ButtonsStyle.primary.title}
  line-height: 20px;
`

export const QuantityWrapper = styled.View`
  background-color: ${COLORS.WHITE.TOTAL_WHITE};
  min-width: 26px;
  height: 26px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`

export const Quantity = styled(H4)`
  color: ${COLORS.PRIMARY.RED};
  margin-left: 1px;
`

export const Price = styled.Text`
  ${ButtonsStyle.primary.title}
  margin-top: 5px;
`
