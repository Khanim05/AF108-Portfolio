import React from 'react'
import styles from './products.module.css'
import ProductZ from '../productZ/ProductZ'

const Products = ({products,onDelete,onEdit}) => {
    // let {id,title,price,description,category,image,rating,rate,count}=product
  return (
    <div className={styles.area}>
      { products && 
        products.map((item)=>(
           <ProductZ
           key={item.id}
           product={item}
           delPro={()=>onDelete(item.id)}
           editPro={()=>onEdit(item)}
           />
        )) }
    </div>
  )
}

export default Products
