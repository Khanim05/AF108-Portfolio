import React from 'react'
import style from '../inputs/inputs.module.css'
import { FaMessage } from "react-icons/fa6";
import Buttons from '../buttons/Buttons'


const Inputs = () => {
  return (
    <div className={style.input_area}>
        <div className={style.top}>
        <p className={style.icon}><FaMessage /></p>
      <h3 className={style.title}>Get in touch</h3>
      <p className={style.text}>We'd love to hear from you</p>
      </div>
      <p></p>
       <p><input type="text"  placeholder='Full name'/></p>
       <p><input type="email" name="" id=""  placeholder='Email address'/></p>
       <p><input type="text"  placeholder='Phone number'/></p>
       <p><textarea name="" id="" placeholder='Message'></textarea></p>
       <Buttons className={style.btn}>Submit</Buttons>
    </div>
  )
}

export default Inputs
