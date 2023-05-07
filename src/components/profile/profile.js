import React from 'react'
import styles from './profile.module.css'
import {Link} from 'react-router-dom'

const Profile = ({sum, counter, setVisible}) => {
  return (
    <ul className={styles.profile}>
      <li
        onClick={() => setVisible(true)}
        className={styles.cart}>{sum ? sum : 0} руб</li>
      <li className={styles.favorite}>
        <Link to='/favorites' className={styles.link}></Link>
        <div className={styles.counter}>{counter ? counter : null}</div>
      </li>
      <li className={styles.profileIcon}></li>
    </ul>
  )
}

export default Profile