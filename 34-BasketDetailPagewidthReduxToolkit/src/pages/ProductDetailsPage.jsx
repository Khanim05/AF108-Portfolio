import React from 'react'
import './productdetails.css'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, updateBasket } from '../redux/features/basket'

const ProductDetailsPage = () => {
    const {id}=useParams()
    const {allProducts}=useSelector(p=>p.product)
    // console.log(id)
    let findProd=allProducts.find(p=>p.id===id)
    const {basketProducts}=useSelector(p=>p.basket)
    let basketProd=basketProducts.find(p=>p.id==id)
    // console.log(findProd.id)

   let dispatch=useDispatch()
  return (
    <div className="product-container">
        <div className='product-image'>
            <img src={findProd.image} alt="" className='img' />   
        </div> 
                    <div className="product-details">
                        <h4 className="product-title">{findProd.title.slice(0,20)}</h4>
                        <p className="product-category">category: {findProd.category}</p>
                        <p className="product-price">${findProd.price}</p>
                        <p className="product-desc">${findProd.description}</p>
                    
                     <div className="product-rating">
                        <span>⭐{findProd.rating.rate}</span>
                        <span>{findProd.rating.count} (reviews)</span>
                    </div>
                    <div className="quantity-selector">
                        <button className="btn-minus" 
                        disabled={basketProd?.count==1}
                        onClick={()=>dispatch(decrement(findProd.id))}
                        >-
                        </button>
                        <p className='count'>{basketProd ? basketProd.count : 1}</p>
                        <button className="btn-plus"
                        onClick={()=>dispatch(increment(findProd.id))}
                        >
                        +
                            </button>
                    </div>

                    <button className="btn btn-danger add-to-cart"
                    onClick={()=>dispatch(updateBasket(findProd))}
                    >
                        Add to cart
                    </button>
                        </div>
                   
  

    </div>
  )
}

export default ProductDetailsPage
