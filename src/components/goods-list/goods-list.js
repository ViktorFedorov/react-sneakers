import React, {useEffect, useState} from 'react'
import GoodsItem from '../goods-item/goods-item'
import {getGoodsList} from '../../services/api'
import styles from './goods-list.module.css'
import SpinnerLoader from '../spinner-loader/spinner-loader'

const GoodsList = () => {
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
          goods.map(({title, image, price}) => {
            return <GoodsItem
              key={title}
              title={title}
              image={image}
              price={price}
            />
          }) : <SpinnerLoader />
        }
      </ul>



    </div>
  )
}

export default GoodsList