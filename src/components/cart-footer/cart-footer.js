import React from 'react'
import styles from './cart-footer.module.css'

const CartFooter = ({sum, tax}) => {
  return (
    <div className={styles.cartFooter}>
      <div className={styles.cartSum}>
        <span className={styles.mediumText}>Итого:</span>
        <span className={styles.dashed}></span>
        <span className={styles.boldText}>{sum} руб.</span>
      </div>
      <div className={styles.cartSum}>
        <span className={styles.mediumText}>Налог 5%:</span>
        <span className={styles.dashed}></span>
        <span className={styles.boldText}>{Math.floor(tax)} руб.</span>
      </div>
      <button className={styles.createOrderButton}>
        Оформить заказ
      </button>
    </div>
  )
}

export default CartFooter