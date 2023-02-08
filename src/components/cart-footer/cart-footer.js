import React from 'react'
import styles from './cart-footer.module.css'

const CartFooter = () => {
  return (
    <div className={styles.cartFooter}>
      <div className={styles.cartSum}>
        <span>Итого:</span>
        <span>21498 руб.</span>
      </div>
      <div className={styles.cartTax}>
        <span>Налог 5%:</span>
        <span>1074 руб.</span>
      </div>
      <button className={styles.createOrderButton}>
        Оформить заказ
      </button>
    </div>
  )
}

export default CartFooter