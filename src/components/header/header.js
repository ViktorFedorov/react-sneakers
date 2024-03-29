import React from 'react'
import Logo from '../logo/logo'
import styles from './header.module.css'
import Profile from '../profile/profile'

const Header = ({sum, counter, setVisible}) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Profile sum={sum} counter={counter} setVisible={setVisible}/>
    </div>
  )
}

export default Header