import React from 'react'
import styles from './favorites-empty.module.css'
import {Link} from 'react-router-dom'

const FavoritesEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sadFace}></div>
      <h2 className={styles.header}>Тут пока ничего нет :(</h2>
      <p className={styles.text}>Вы ничего не добавляли в избранное</p>
      <Link to='/'>
        <button className={styles.buttonBack}>
          Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default FavoritesEmpty