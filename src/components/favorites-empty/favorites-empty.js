import React from 'react'
import styles from './favorites-empty.module.css'

const FavoritesEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sadFace}></div>
      <h2 className={styles.header}>Тут пока ничего нет :(</h2>
      <p className={styles.text}>Вы ничего не добавляли в избранное</p>
      <button className={styles.buttonBack}>
        Вернуться назад
      </button>
    </div>
  )
}

export default FavoritesEmpty