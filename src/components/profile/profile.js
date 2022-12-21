import React from 'react'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <ul className={styles.profile}>
      <li className={styles.cart}>1205 руб</li>
      <li className={styles.favorite}> </li>
      <li className={styles.profileIcon}> </li>
    </ul>
  )
}

export default Profile