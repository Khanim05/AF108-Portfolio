import React from 'react'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import styles from './header/header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default Header
