import React from 'react'
import styles from './goods-item.module.css'
import sneaker from '../../images/cross-1.jpg'

const GoodsItem = () => {
  return (
    <li className={styles.goodsItem}>
      <button className={styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={sneaker} alt=""/>
      <h2 className={styles.goodsHeading}>Мужские Кроссовки Nike Blazer Mid Suede</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>12999 руб.</span>
        </div>
        <button className={styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem