import React from 'react'
import styles from './spinner-loader.module.css'

const SpinnerLoader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default SpinnerLoader