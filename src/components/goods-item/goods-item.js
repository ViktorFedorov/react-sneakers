import React, {useState} from 'react'
import styles from './goods-item.module.css'

const GoodsItem = ({sneaker, addGoodToCart}) => {
  const [active, setActive] = useState(false)
  const [like, setLike] = useState(false)

  const addHandler = () => {
    setActive(!active)
    addGoodToCart(sneaker)
  }

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