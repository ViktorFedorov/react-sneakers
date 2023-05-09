import React from 'react'
import {setAdded, setLiked} from '../../services/api'
import styles from './goods-item.module.css'

const GoodsItem = ({product, addGoodToCart, setFavorites}) => {
  // добавить в корзину
  const addHandler = () => {
    setAdded(product.id, !product.added)
      .then(() => addGoodToCart(product))
  }

  // добавить в избранное
  const addToFavorite = () => {
    setLiked(product.id, !product.favorite)
      .then((product) => setFavorites(product))
  }

  return (
    <li className={styles.goodsItem}>
      <button
        onClick={addToFavorite}
        className={product.favorite ? `${styles.addToFavorite} ${styles.liked}` : styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={product.image} alt=""/>
      <h2 className={styles.goodsHeading}>{product.title}</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{product.price} руб.</span>
        </div>
        <button
          onClick={addHandler}
          className={product.added ? `${styles.goodsAddToCart} ${styles.active}` : styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem