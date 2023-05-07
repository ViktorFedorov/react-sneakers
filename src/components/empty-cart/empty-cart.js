import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './empty-cart.module.css'

const EmptyCart = ({setVisible}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    setVisible(false)
    navigate('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.empty}></div>
      <h2 className={styles.header}>Корзина пуста</h2>
      <p className={styles.description}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button
        onClick={handleClick}
        className={styles.buttonBack}>
        К покупкам
      </button>
    </div>
  )
}

export default EmptyCart