import React from 'react'


const Buttons = ({children,className}) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  )
}

export default Buttons
