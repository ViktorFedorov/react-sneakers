import React from 'react'
import styles from './goods-item.module.css'

const GoodsItem = ({title, image, price}) => {
  return (
    <li className={styles.goodsItem}>
      <button className={styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={image} alt=""/>
      <h2 className={styles.goodsHeading}>{title}</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{price} руб.</span>
        </div>
        <button className={styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem