import React from 'react'

const Button = ({children,onClick,className}) => {
  return (
    <div>
      <button onClick={onClick} className={className}>{children}</button>
    </div>
  )
}

export default Button
