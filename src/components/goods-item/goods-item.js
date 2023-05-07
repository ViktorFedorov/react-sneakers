import React, {useState} from 'react'
import {setAdded, setLiked} from '../../services/api'
import styles from './goods-item.module.css'

const GoodsItem = ({product, addGoodToCart, setFavorites}) => {
  const [active, setActive] = useState(product.added)
  const [favorite, setFavorite] = useState(product.favorite)

  // кнопка 'добавить в корзину'
  const addHandler = () => {
    setAdded(product.id, !active)
      .then(() => setActive(!active))

    addGoodToCart(product)
  }

  // кнопка 'добавить в избранное'
  const addToFavorite = () => {
    setLiked(product.id, !favorite)
      .then((product) => {
        setFavorite(!favorite)
        setFavorites(product)
      })
  }

  return (
    <li className={styles.goodsItem}>
      <button
        onClick={addToFavorite}
        className={favorite ? `${styles.addToFavorite} ${styles.liked}` : styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={product.image} alt=""/>
      <h2 className={styles.goodsHeading}>{product.title}</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{product.price} руб.</span>
        </div>
        <button
          onClick={addHandler}
          className={active ? `${styles.goodsAddToCart} ${styles.active}` : styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem