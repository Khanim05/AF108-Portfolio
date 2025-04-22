import React from 'react'
import styles from '../main/main.module.css'
import Buttons from '../buttons/Buttons'


const Main = () => {
  return (
    <div className={styles.back}>
    <div className={styles.main_area}>
      <h1 className={styles.title}>Present your business in a whole new way</h1>
      <p className={styles.text}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
         most popular front-end open source toolkit!</p>
         <div className={styles.btn_area}>
      <Buttons className={styles.button1}>Get Started</Buttons>
      <Buttons className={styles.button2}>Learn More</Buttons>
      </div>
    </div>
    </div>
  )
}

export default Main
