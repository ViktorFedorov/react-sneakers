import React from 'react'
import styles from './cart-item.module.css'
import cartImage from '../../images/cartItem.jpg'

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img src={cartImage} alt="" className={styles.cartImage} />
      <div className={styles.cartContent}>
        <h3 className={styles.cartTitle}>
          Мужские Кроссовки Nike Air Max 270
        </h3>
        <p className={styles.cartPrice}>
          12 999 руб.
        </p>
      </div>
      <button className={styles.cartRemove} title='удалить товар'></button>
    </div>
  )
}

export default CartItem