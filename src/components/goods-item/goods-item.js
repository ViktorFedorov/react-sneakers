import React, {useState} from 'react'
import styles from './goods-item.module.css'
import {setAdded} from '../../services/api'

const GoodsItem = ({sneaker, addGoodToCart}) => {
  const [active, setActive] = useState(false)
  const [like, setLike] = useState(false)

  // кнопка 'добавить в корзину'
  const addHandler = () => {

    console.log(sneaker.id)

    setAdded(sneaker.id)
      .then(() => setActive(!active))


    addGoodToCart(sneaker)
  }

  /////// рендерить статус added с бэка

  return (
    <li className={styles.goodsItem}>
      <button
        onClick={() => setLike(!like)}
        className={like ? `${styles.addToFavorite} ${styles.liked}` : styles.addToFavorite}></button>
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