import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectTotalQuantity } from '@store/slices/cartSlice'

import { CartModal } from './components/CartModal'
import { FloatingBtnTitle } from './components/FloatingBtnTitle'
import { CartWrapper, StyledBtn } from './styles'

export const StoreFloatingButton = () => {
  const [showCartModal, setShowCartModal] = useState<boolean>(false)

  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <CartWrapper
      animate={{
        bottom: totalQuantity > 0 ? 0 : -70,
      }}
      transition={{
        type: 'timing',
      }}
    >
      <StyledBtn
        testID='store-floating-button'
        onPress={() => setShowCartModal(true)}
        title={<FloatingBtnTitle />}
        type='primary'
      />
      <CartModal isVisible={showCartModal} setIsVisible={setShowCartModal} />
    </CartWrapper>
  )
}
