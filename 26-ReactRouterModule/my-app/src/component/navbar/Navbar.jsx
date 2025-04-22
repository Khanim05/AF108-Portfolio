import React from 'react'
import Navbarlist from '../navbarList/Navbarlist'
import Navbarlogo from '../navbarLogo/Navbarlogo'
import styles from '../navbar/navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.back}>
    <div className={`${styles.navbar_area} container`}>
      <Navbarlogo/>
      <Navbarlist/>
    </div>
    </div>
  )
}

export default Navbar
