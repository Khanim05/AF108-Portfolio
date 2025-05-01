import React from 'react'
import './wishlistpage.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll, removeItem } from '../redux/features/wishlist'

const WishlistPage = () => {
  let {wishlistProducts}=useSelector((p)=>p.wishlist)
  const dispatch=useDispatch()
  return (
    <div className="wishlist">
       {
        wishlistProducts  && wishlistProducts.map((p)=>
            <div className="wishlist-item">
            <div className="image">
            <img
          src={p.image}
          alt="Product Image"
        />
      </div>
      <h3 className="title">{p.title.slice(0,20)}</h3>
      <p className="price">${p.price}</p>
      <button className="btn btn-danger" onClick={()=>dispatch(removeItem(p))}>Remove</button>
    </div>
        )
       }
      <button className='btn' onClick={()=>dispatch(removeAll())}>Delete All</button>
  </div>
  )
}

export default WishlistPage
