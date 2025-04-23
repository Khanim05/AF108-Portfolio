import React, { useState } from 'react'
import Button from '../button/Button'
import styles from './counter.module.css'

const Counter = () => {
  let [count, setCount] = useState(0)
  let [input, setInput] = useState("")

  function increment() {
    setCount((count) => count + 1)
  }

  function decrement() {
    if (count !== 0) {
      setCount((count) => count - 1)
    }
  }

  function add() {
    let value=Number(input)
      setCount(value!=0 ? count+value : 0)
  }

  function dontAdd() {
     let value=Number(input)
     setCount(count>0  ? count-value : 0)
  }

  return (
    <div className={styles.count_area}>
      <h2 className={styles.title}>Counter</h2>
      <p className={styles.count}>Count: {count}</p>
      <div className={styles.buttonGroup}>
        <Button onClick={increment} className={styles.Button}>+</Button>
        <Button onClick={decrement} className={styles.Button}>-</Button>
      </div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ədəd daxil edin"
        className={styles.input}
      />
      <div className={styles.buttonGroup}>
        <Button onClick={add} className={styles.Button1}>Sum</Button>
        <Button onClick={dontAdd} className={styles.Button1}>Subtraction</Button>
      </div>
    </div>
  )
}

export default Counter
