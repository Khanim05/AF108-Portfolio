import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../admin/AdminPanel.css'
import { addproducts, deleteproduct, updateproduct } from '../../redux/features/product'
import Example from '../../utils/modal/Modal'


const AdminPanel = () => {
    const [formdata,setData]=useState({
      image:"",
      title:"",
      category:"",
      price:"",
      description:"",
    })
    const {allProducts}=useSelector(p=>p.product)
    const dispatch=useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setData({...formdata,[name]:value})
    }


    const handleAddproduct=(e)=>{
      e.preventDefault()
      dispatch(addproducts({
        ...formdata,
        rating:{rate:0,count:0}
      }))
      handleClose()
      setData({
      image:"",
      title:"",
      category:"",
      price:"",
      description:"",
      })
    }

    const handleEditProduct=(e)=>{
      e.preventDefault()
      handleClose()
      dispatch(updateproduct(formdata))
      setData({
        image:"",
        title:"",
        category:"",
        price:"",
        description:"",
        })

    }

  return (
    <div>
       <div className="basket">
        <h2>Admin Panel Page</h2>
        <button className='createItem' onClick={handleShow}>Create</button>
                    {
                      allProducts.map((item)=>(
                        <div className="basket-item" key={item.id}>
                        <div className="image" >
                        
                        <img src={item.image} alt="Product Image" />
                        </div>
                        <h6 className="title">{item.title.slice(0,20)}</h6>
                        <p className="category">{item.category}</p>
                        <p className="price">$ {item.price}</p>
                        <button 
                        className="delItem" 
                        onClick={()=>dispatch(deleteproduct(item.id))}
                        >Remove
                        </button>
                        <button className='editItem'
                        type='submit'
                        onClick={()=>{
                          setData(item);
                          handleShow();
                        }}
                        >Edit</button>
                      </div>
                      ))
                    }
                  </div>
                  <Example
                  show={show}
                  handleClose={handleClose}
                  handleChange={handleChange}
                  formdata={formdata}
                  handleSubmit={formdata.id ? handleEditProduct : handleAddproduct}
                  />
    </div>
  )
}

export default AdminPanel
