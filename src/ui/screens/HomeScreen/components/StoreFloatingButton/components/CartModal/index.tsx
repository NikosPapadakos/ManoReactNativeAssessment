import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '@store'
import { selectTotalPrice } from '@store/slices/cartSlice'

import { ProductRow } from './components/ProductRow'
import {
  CloseModalBtn,
  Modal,
  ModalBackDrop,
  ModalContent,
  Title,
  Total,
  TotalValue,
} from './styles'
import { CartModalProps } from './types'

export const CartModal = ({ isVisible, setIsVisible }: CartModalProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.products)

  const totalPrice = useSelector(selectTotalPrice)

  useEffect(() => {
    if (totalPrice === 0) {
      onClose()
    }
  }, [totalPrice])

  const onClose = () => {
    setIsVisible(false)
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onClose}
      animationType='fade'
      testID='cart-modal'
    >
      <ModalBackDrop>
        <ModalContent>
          <Title>Your Cart</Title>
          <ScrollView bounces={false}>
            {cartItems.map((item) => (
              <ProductRow key={item.id} product={item} closeModal={onClose} />
            ))}
          </ScrollView>
          <Total>
            Total: <TotalValue>{totalPrice}₦</TotalValue>
          </Total>
          <CloseModalBtn title='Close' type='secondary' onPress={onClose} />
        </ModalContent>
      </ModalBackDrop>
    </Modal>
  )
}
