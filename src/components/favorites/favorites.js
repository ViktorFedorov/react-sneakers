import React, {useContext} from 'react'
import GoodsItem from '../goods-item/goods-item'
import FavoritesEmpty from '../favorites-empty/favorites-empty'
import {FavoritesContext} from '../app/app'
import styles from './favorites.module.css'

const Favorites = ({setFavorites}) => {
  // достаем список избранного из контекста
  const favorites = useContext(FavoritesContext)

  return (
    <div className={styles.favorites}>
      <h1>Понравившиеся товары</h1>
      {favorites.length ? (
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