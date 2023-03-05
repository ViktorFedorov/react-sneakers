import React, {useState} from 'react'
import styles from './goods-item.module.css'

const GoodsItem = ({title, image, price}) => {
  const [active, setActive] = useState(false)
  const [like, setLike] = useState(false)

  return (
    <li className={styles.goodsItem}>
      <button
        onClick={() => setLike(!like)}
        className={like ? `${styles.addToFavorite} ${styles.liked}` : styles.addToFavorite}></button>
      <img className={styles.goodsImage} src={image} alt=""/>
      <h2 className={styles.goodsHeading}>{title}</h2>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{price} руб.</span>
        </div>
        <button
          onClick={() => setActive(!active)}
          className={active ? `${styles.goodsAddToCart} ${styles.active}` : styles.goodsAddToCart}></button>
      </div>
    </li>
  )
}

export default GoodsItem