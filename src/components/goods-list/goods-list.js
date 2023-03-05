import React, {useEffect, useState} from 'react'
import GoodsItem from '../goods-item/goods-item'
import {getGoodsList} from '../../services/api'
import styles from './goods-list.module.css'
import SpinnerLoader from '../spinner-loader/spinner-loader'

const GoodsList = ({addGoodToCart}) => {
  const [goods, setGoods] = useState([])

  useEffect(() => {
    getGoodsList()
      .then(setGoods)
      .catch(console.log)
  }, [])

  return (
    <div className={styles.goods}>
      <div className={styles.goodsListHeading}>
        <h1>Все кроссовки</h1>
        <input
          className={styles.searchBar}
          placeholder='Поиск...'
          type="text"/>
      </div>
      <ul className={styles.goodsList}>
        {goods.length ?
          goods.map(sneaker => {
            return <GoodsItem
              key={sneaker.title}
              sneaker={sneaker}
              addGoodToCart={addGoodToCart}
            />
          }) : <SpinnerLoader />
        }
      </ul>
    </div>
  )
}

export default GoodsList