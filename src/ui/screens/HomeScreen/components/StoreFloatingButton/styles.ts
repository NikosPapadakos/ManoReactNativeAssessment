import { CustomButton } from '@components/CustomButton'
import { BORDER_RADII } from '@theme'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const CartWrapper = styled(MotiView)`
  position: absolute;
  width: 100%;
`

export const StyledBtn = styled(CustomButton)`
  height: 70px;
  border-radius: ${BORDER_RADII.BUTTON_RADIUS}px ${BORDER_RADII.BUTTON_RADIUS}px
    0px 0px;
`
