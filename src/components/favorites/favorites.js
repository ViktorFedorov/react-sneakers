import React from 'react'
import styles from './favorites.module.css'
import GoodsItem from '../goods-item/goods-item'
import FavoritesEmpty from '../favorites-empty/favorites-empty'

const Favorites = ({favorites, setFavorites}) => {
  return (
    <div className={styles.favorites}>
      <h1>Понравившиеся товары</h1>

      {
        favorites.length ? (
          <ul className={styles.favoritesList}>
            {
              favorites.map(product => {
                return <GoodsItem
                  key={product.id}
                  product={product}
                  setFavorites={setFavorites}
                />
              })
            }
          </ul>
        ) : <FavoritesEmpty />
      }






    </div>
  )
}

export default Favorites