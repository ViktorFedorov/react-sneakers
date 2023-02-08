import React, {useState} from 'react'
import styles from './cart.module.css'
import CartItem from '../cart-item/cart-item'
import CartFooter from '../cart-footer/cart-footer'

const Cart = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div
      onClick={() => setVisible(false)}
      className={visible ? `${styles.overlay} ${styles.visible}` : styles.overlay}
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.wrapper}>
          <div className={styles.goodsInCart}>
            <h2 className={styles.cartHeader}>Корзина</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <CartFooter />
        </div>
      </div>
    </div>
  )
}

export default Cart