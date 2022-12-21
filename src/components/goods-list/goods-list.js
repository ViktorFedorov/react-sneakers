import React from 'react'
import styles from './goods-list.module.css'
import GoodsItem from '../goods-item/goods-item'

const GoodsList = () => {
  return (
    <div className={styles.goods}>
      <h1>Все кроссовки</h1>
      <ul className={styles.goodsList}>
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
      </ul>

    </div>
  )
}

export default GoodsList