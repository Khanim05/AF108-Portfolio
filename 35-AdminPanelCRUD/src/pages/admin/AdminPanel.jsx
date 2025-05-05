import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../admin/AdminPanel.css'
import { addproducts, deleteproduct } from '../../redux/features/product'
import Example from '../../utils/modal/Modal'


const AdminPanel = () => {
    const {allProducts}=useSelector(p=>p.product)
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
       <div className="basket">
        <h2>Admin Panel Page</h2>
        <button className='createItem' onClick={handleShow}>Create</button>
                    {
                      allProducts.map((item)=>(
                        <div className="basket-item" key={item.id}>
                        <div className="image" >
                        
                        <img src={item.image} alt="" />
                        </div>
                        <h6 className="title">{item.title.slice(0,20)}</h6>
                        <p className="category">{item.category}</p>
                        <p className="price">$ {item.price}</p>
                        <button 
                        className="delItem" 
                        onClick={()=>dispatch(deleteproduct(item.id))}
                        >Remove
                        </button>
                        <button className='editItem'>Edit</button>
                      </div>
                      ))
                    }
                  </div>
                  <Example
                  show={show}
                  handleClose={handleClose}
                  />
    </div>
  )
}

export default AdminPanel
