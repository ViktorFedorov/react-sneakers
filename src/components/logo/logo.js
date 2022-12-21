import React from 'react'
import logo from '../../images/logo-svg.svg'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt='' />
      <div>
        <h3 className={styles.logoHeader}>REACT SNEAKERS</h3>
        <p className={styles.logoText}>Магазин лучших кроссовок</p>
      </div>
    </div>
  )
}

export default Logo