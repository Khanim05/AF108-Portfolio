import React from 'react'
import './basketpage.css'
import { useSelector } from 'react-redux'

const BasketPage = () => {

  let {basketProducts}= useSelector((p)=>p.basket)

  return (
    
      <div className="basket">
              {
                basketProducts.map((item)=>(
                  <div className="basket-item">
                  <div className="image">
                  
                  <img src={item.image} alt="" />
                  </div>
                  <h6 className="title">{item.title}</h6>
                  <p className="category">{item.category}</p>
                  <p className="price">{item.price}</p>
                  <div className="count-area">
                    <button className="minus-btn" disabled>-</button>
                    <p className="count">{item.count}</p>
                    <button className="plus-btn">+</button>
                  </div>
                  <button className="btn btn-danger">Remove</button>
                </div>
                ))
              }

            </div>
    
  )
}

export default BasketPage
