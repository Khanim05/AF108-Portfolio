import React from 'react'
import '../button/Button.css'

const Button = ({children,style}) => {
  return <button style={style} className='Customstyle'>{children}</button>
}
export default Button
