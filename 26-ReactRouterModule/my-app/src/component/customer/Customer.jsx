import React from 'react'
import styles from '../customers/customers.module.css'

const Customer = ({icon,text,name}) => {
  return (
    <div className={styles.custom_area}>
        <div><p className={styles.icon}>{icon}</p></div>
      <div> 
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
      </div>
     
    </div>
  )
}

export default Customer
