import React, {useEffect, useState} from 'react'
import styles from './cart.module.css'
import CartItem from '../cart-item/cart-item'
import CartFooter from '../cart-footer/cart-footer'
import EmptyCart from '../empty-cart/empty-cart'

const Cart = ({remove, goodsInCart, visible, setVisible}) => {
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

  const getSum = () => goodsInCart.length ? goodsInCart.reduce((acc, item) => (acc + item.price), 0) : null
  const getTax = () => getSum() ? getSum() * 0.05 : null

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
                className={styles.cartClose} title='закрыть корзину'>
              </button>
            </div>
            {
              goodsInCart.length
              ? goodsInCart.map(({id, title, price, image}) => {
                  return <CartItem key={id} id={id} title={title} price={price} image={image} remove={remove} />
                })
              : <EmptyCart />
            }
          </div>
          {
            getSum() && <CartFooter sum={getSum()} tax={getTax()}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart