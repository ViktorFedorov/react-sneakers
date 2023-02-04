import React, {useState} from 'react'
import styles from './cart.module.css'
import CartItem from '../cart-item/cart-item'

const Cart = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div
      onClick={() => setVisible(!visible)}
      className={visible ? `${styles.overlay} ${styles.visible}` : styles.overlay}
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.cartHeader}>Корзина</h2>
        <CartItem />
        <CartItem />
      </div>
    </div>
  )
}

export default Cart