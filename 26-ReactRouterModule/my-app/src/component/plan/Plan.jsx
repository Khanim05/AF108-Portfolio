import React from 'react'
import Buttons from '../buttons/Buttons'
import styles from '../plans/plans.module.css'

const Plan = ({title,price,icon,user,icon1,storage,icon2,project,icon3,community,Unlimited,Dedicated,Free,Monthly,btntext}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h1 className={styles.price}>{price} <span className={styles.mo}>/mo.</span></h1>
      <p className={styles.icon}>{icon} <span>{user}</span></p>
      <p className={styles.icon}>{icon1} <span>{storage}</span></p>
      <p className={styles.icon}>{icon2} <span>{project}</span></p>
      <p className={styles.icon}>{icon3} <span>{community}</span></p>
      <p className={styles.nocheck}> <span>x</span>{Unlimited}</p>
      <p className={styles.nocheck}> <span>x</span>{Dedicated}</p>
      <p className={styles.nocheck}> <span>x</span>{Free}</p>
      <p className={styles.nocheck}> <span>x</span>{Monthly}</p>    
      <Buttons className={styles.button}>{btntext}</Buttons> 
    </div> 
  )
}

export default Plan
