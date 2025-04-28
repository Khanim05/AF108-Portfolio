import React from 'react'
import axios from "axios"
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect} from 'react'
import Products from './component/products/Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

{/* <Spinner animation="border" variant="primary" /> */}

const App = () => {
  const url="https://fakestoreapi.com/products"


  let [product,setProduct]=useState([])

  let [title,setTitle]=useState("")
  let[price,setPrice]=useState("")

  let [loading,setLoading]=useState(true)

  let[showModal,setShowModal]=useState(false)

  let [editTitle,setEditTitle]=useState("")

  let [editPrice,setEditPrice]=useState("")

  let [editProduc,setEditProduc]=useState(null)
  

  let allProducts=async()=>{
  try {
    let res= await axios.get(url)
  setProduct(res.data)
  } 
  catch  {
    toast.error("Xeta bas verdi")
  }
  finally {
    setLoading(false)
  }
  }

  useEffect(()=>{
  allProducts()
  },[])

  let delAll=()=>{
    setProduct([])
    toast.info("Butun mehsullar silindi")
  }

  let addPro=()=>{
    if (title!="" && price!="") {
      let newObj={
      id: uuidv4(),
      title: title,
      price: price
     }
     setProduct([...product,newObj])
     setPrice("")
     setTitle("")
     toast.success("Mehsul elave olundu")
    } 
  }

  let deletedItem=(id)=>{
    setProduct(product.filter((elem)=>elem.id!=id))
    toast.info("Mehsul silindi")
  }

  let editItem=(product)=>{
   setShowModal(true)
   setEditProduc(product)
   setEditPrice(product.price)
   setEditTitle(product.title)
  }

  let addEditPro = () => {
    let updateProduc = product.map((elem) => {
      if (elem.id === editProduc.id) {
        return { ...elem, title: editTitle, price: editPrice };
      } else {
        return elem;
      }
    });
  
    setProduct(updateProduc);
    setShowModal(false);
    toast.success("Mehsul redakte olundu");
  };
  
 

  return (
    <div>
      <h2 style={{textAlign:"center",marginTop:"20px"}}>Products</h2>
       { loading ? ( <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>) :(
        <div>
          {
            showModal ? (<div className='btn_area'>
              <input type="text"  placeholder='Enter your title name' value={editTitle}
              onChange={(e)=>setEditTitle(e.target.value)}
              />
              <input type="text" placeholder='Enter your price' value={editPrice}
              onChange={(e)=>setEditPrice(e.target.value)}
              />
               <button className='btn1' onClick={delAll}>Delete All</button>
              <button className='btn1' onClick={addEditPro}>Edit Product</button>
               
              </div>) : (
                <div className='btn_area'>
                <input type="text"  placeholder='Enter your title name' value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <input type="text" placeholder='Enter your price' value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
                 <button className='btn1' onClick={delAll}>Delete All</button>
                <button className='btn1' onClick={addPro}>Add Product</button>
                 
                </div>
              )
          }
         
          
          <Products 
      products={product} 
      onDelete={deletedItem}
      onEdit={editItem}
      />
        </div>
        
       )}
       


       


       <ToastContainer />
    </div>
  )
}

export default App
