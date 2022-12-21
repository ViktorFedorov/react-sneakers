import React from 'react'
import Logo from '../logo/logo'
import styles from './header.module.css'
import Profile from '../profile/profile'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Profile />
    </div>
  )
}

export default Header