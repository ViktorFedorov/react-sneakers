import React from 'react'
import GoodsItem from '../goods-item/goods-item'
import sneakers from '../../services/test-data'
import styles from './goods-list.module.css'

const GoodsList = () => {
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
        {
          sneakers.map(({title, image, price}) => {
            return <GoodsItem
              key={title}
              title={title}
              image={image}
              price={price}
            />
          })
        }
      </ul>
    </div>
  )
}

export default GoodsList