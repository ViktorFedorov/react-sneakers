import React from 'react'
import {useParams} from 'react-router-dom'
import GoodsItem from '../goods-item/goods-item'
import styles from './product-details.module.css'

const ProductDetails = ({products}) => {
  // вытащим id из url-а
  const {id} = useParams()

  // найдем по id товар
  const product = products.find(item => item.id === id)

  return (
    <div className={styles.details}>
      <h1>{product ? product.title : 'загружаю ...'}</h1>
      {product && <GoodsItem product={product} />}
    </div>
  )
}

export default ProductDetails