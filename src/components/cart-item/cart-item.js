import React from 'react'
import styles from './cart-item.module.css'

const CartItem = ({title, price, image, remove, id}) => {
  return (
    <div className={styles.cartItem}>
      <img src={image} alt="" className={styles.cartImage} />
      <div className={styles.cartContent}>
        <h3 className={styles.cartTitle}>{title}</h3>
        <p className={styles.cartPrice}>
          {price}
        </p>
      </div>
      <button
        onClick={() => remove(id)}
        className={styles.cartRemove} title='удалить товар'></button>
    </div>
  )
}

export default CartItem