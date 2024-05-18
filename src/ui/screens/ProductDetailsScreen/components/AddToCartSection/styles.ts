import { CustomButton } from '@components/CustomButton'
import { COLORS, SCREEN_SPACING, SPACES } from '@theme'
import { RoundedCard } from '@theme/cards'
import { H3 } from '@theme/typography'
import styled from 'styled-components/native'

export const OuterContainer = styled(RoundedCard)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

export const AddToCartSectionContainer = styled(RoundedCard)`
  height: 80px;
  background-color: ${COLORS.WHITE.LIGHT_WHITE};
  padding: ${SPACES.xxl}px ${SCREEN_SPACING.SCREEN_SIDE}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 0.5;
`

export const Quantity = styled(H3)`
  text-align: center;
  width: 50px;
`

export const PlusMinusBtn = styled(CustomButton).attrs({
  textStyle: {
    fontSize: 30,
    lineHeight: 30,
  },
})`
  overflow: visible;
  height: 35px;
  width: 35px;
  padding: 8px 0px 0px 0px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const AddProductBtn = styled(CustomButton)`
  padding: 3px 0px 0px 0px;
  height: 50px;
  flex: 0.5;
`
