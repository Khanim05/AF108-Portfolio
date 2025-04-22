import React from 'react'
import styles from '../featureds/featureds.module.css'

const Featured = ({icon,title,desc,text}) => {
  return (
    <div>
      <p className={styles.icon}>{icon}</p>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.desc}>{desc}</p>
      <a href="" className={styles.text}>{text}</a>
    </div>
  )
}

export default Featured
