import React from 'react'
import styles from '../products/products.module.css'
import { MdModeEdit,MdDelete } from "react-icons/md";






const ProductZ = ({product,delPro,editPro}) => {
  let {id,title,price,image}=product
  
  return (
    <div>
      <div className={styles.products_area}>
                  <p key={id}>{title}</p>
                  <p>${price}</p>
                  <img src={image} alt="" className={styles.image}/>
                  <div>
                  <div className={styles.icons}>
                  <MdDelete onClick={()=>delPro(id)}/>
                  <MdModeEdit  onClick={()=>editPro(product)}/>
                  </div>
                  </div>
                 
                 </div>
    </div>
  )
}

export default ProductZ
