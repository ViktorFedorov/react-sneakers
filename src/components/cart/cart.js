import React, {useEffect} from 'react'
import styles from './cart.module.css'
import CartItem from '../cart-item/cart-item'
import CartFooter from '../cart-footer/cart-footer'

const Cart = ({goods, visible, setVisible}) => {

  useEffect(() => {
    const handlerPressButton = (e) => {
      if (e.key === 'Escape') setVisible(false)
    }

    document.addEventListener('keydown', handlerPressButton)

    // отписка от события
    return () => {
      document.removeEventListener('keydown', handlerPressButton)
    }
  }, [setVisible])

  return (
    <div
      onClick={() => setVisible(false)}
      className={visible ? `${styles.overlay} ${styles.visible}` : styles.overlay}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.wrapper}>
          <div className={styles.goodsInCart}>
            <div className={styles.cartTitle}>
              <h2 className={styles.cartHeader}>Корзина</h2>
              <button
                onClick={() => setVisible(false)}
                className={styles.cartClose} title='закрыть корзину'></button>
            </div>
            {
              goods.length
              ? goods.map(({title, price, image}) => {
                  return <CartItem key={title} title={title} price={price} image={image}/>
                })
              : 'Тут пока пусто'
            }
          </div>
          <CartFooter />
        </div>
      </div>
    </div>
  )
}

export default Cart