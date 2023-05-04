import React, {useState} from 'react'
import styles from './goods-item.module.css'
import {setAdded} from '../../services/api'

const GoodsItem = ({sneaker, addGoodToCart, setFavorites}) => {
  const [active, setActive] = useState(sneaker.added)
  const [favorite, setFavorite] = useState(false)

  // кнопка 'добавить в корзину'
  const addHandler = () => {
    setAdded(sneaker.id, !active)
      .then(() => setActive(!active))

    addGoodToCart(sneaker)
  }

  // кнопка 'добавить в избранное'
  const addToFavorite = () => {
    // все в локальных стэйтах так как бэк платный сцукоооо
    setFavorites(sneaker)
    setFavorite(!favorite)
  }

  return (
    <li className={styles.goodsItem}>
      <button
        onClick={addToFavorite}
        className={favorite ? `${styles.addToFavorite} ${styles.liked}` : styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={sneaker.image} alt=""/>
      <h2 className={styles.goodsHeading}>{sneaker.title}</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{sneaker.price} руб.</span>
        </div>
        <button
          onClick={addHandler}
          className={active ? `${styles.goodsAddToCart} ${styles.active}` : styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem