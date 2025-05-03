
import './basketpage.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, delAll, delItem, increment } from '../redux/features/basket'

const BasketPage = () => {

  let {basketProducts}= useSelector((p)=>p.basket)
  let dispatch=useDispatch()

  let total=basketProducts.reduce((acc,sum)=>acc+(sum.price*sum.count),0).toFixed(2)

  return (
    
      <div className="basket">
              {
                basketProducts.map((item)=>(
                  <div className="basket-item">
                  <div className="image">
                  
                  <img src={item.image} alt="" />
                  </div>
                  <h6 className="title">{item.title.slice(0,20)}</h6>
                  <p className="category">{item.category}</p>
                  <p className="price">$ {(item.price*item.count).toFixed(2)}</p>
                  <div className="count-area">
                    <button className="minus-btn" 
                    disabled={item.count==1}
                    onClick={()=>dispatch(decrement(item.id))}
                    >
                      -
                    </button>
                    <p className="count">{item.count}</p>
                    <button 
                    className="plus-btn"
                    onClick={()=>dispatch(increment(item.id))}
                    >+
                    </button>
                  </div>
                  <button 
                  className="delItem" 
                  onClick={()=>dispatch(delItem(item.id))}
                  >Remove
                  </button>
                </div>
                ))
              }
              <div className="top_area">
                 <button 
              className="delItem"
              onClick={()=>dispatch(delAll())}
              >
              Delete All
              </button>
              <p>
                Total: ${`${total}`}
              </p>
              </div>
             

            </div>
    
  )
}

export default BasketPage
