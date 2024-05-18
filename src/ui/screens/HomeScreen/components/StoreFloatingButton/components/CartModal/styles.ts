import { Platform } from 'react-native'

import { CustomButton } from '@components/CustomButton'
import { COLORS, SPACES } from '@theme'
import { RoundedLightShadowedCard } from '@theme/cards'
import { H2, H3 } from '@theme/typography'
import styled from 'styled-components/native'

export const Modal = styled.Modal`
  justify-content: center;
  align-items: center;
  height: 500px;
  position: absolute;
  top: 100px;
`

export const ModalBackDrop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled(RoundedLightShadowedCard)`
  height: 450px;
  width: 300px;
  background-color: ${COLORS.WHITE.TOTAL_WHITE};
  padding: ${SPACES.xl}px;
`

export const Title = styled(H2)`
  align-self: center;
  margin-bottom: ${SPACES.lg}px;
`

export const Total = styled(H3)`
  margin-top: ${SPACES.lg}px;
  color: ${COLORS.PRIMARY.RED};
`

export const TotalValue = styled(H3)``

export const CloseModalBtn = styled(CustomButton)`
  height: 40px;
  padding: 0px;
  margin-top: ${SPACES.lg}px;
  padding-top: ${Platform.OS === 'ios' ? 0 : 4}px;
`
