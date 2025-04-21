import React from 'react'


const Product = ({image,name,desc}) => {
  return (
    <div>
        <div className="image_area">
      <img src={image} alt=""  className='image'/>
      <div className="hover">
        <span className='plus'>+</span>
      </div>
      </div>
      <h3 className='name'>{name}</h3>
      <p className='desc'>{desc}</p>
    </div>
  )
}

export default Product
