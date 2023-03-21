import React from 'react'
import styles from './empty-cart.module.css'

const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.empty}></div>
      <h2 className={styles.header}>Корзина пуста</h2>
      <p className={styles.description}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
    </div>
  )
}

export default EmptyCart