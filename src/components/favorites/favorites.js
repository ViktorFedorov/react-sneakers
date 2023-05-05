import React from 'react'
import styles from './favorites.css'
import GoodsItem from '../goods-item/goods-item'
import SpinnerLoader from '../spinner-loader/spinner-loader'

const Favorites = ({favorites}) => {
  return (
    <div className={styles.favorites}>
      <h1>Понравившиеся товары</h1>
      <ul className={styles.favoritesList}>
        {favorites.length ?
          favorites.map(sneaker => {
            return <GoodsItem
              key={sneaker.title}
              sneaker={sneaker}
            />
          }) : <SpinnerLoader />
        }
      </ul>
    </div>
  )
}

export default Favorites