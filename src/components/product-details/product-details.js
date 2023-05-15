import React from 'react'
import {Link, useParams} from 'react-router-dom'
import styles from './product-details.module.css'

const ProductDetails = ({products}) => {
  // вытащим id из url-а
  const {id} = useParams()

  // найдем по id товар
  const product = products.find(item => item.id === id)

  return (
    <div className={styles.details}>
      <h1>{product ? product.title : 'загружаю ...'}</h1>
      <img src={product.image} alt=""/>
      <div className={styles.desc}>{product.desc}</div>
      <div className={styles.goodsFooter}>
        <div className={styles.goodsPrice}>
          <p>ЦЕНА:</p>
          <span>{product.price} руб.</span>
        </div>
      </div>
      <Link to='/'>
        <button className={styles.buttonBack}>
          Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default ProductDetails