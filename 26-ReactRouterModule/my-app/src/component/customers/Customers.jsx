import React from 'react'
import Customer from '../customer/Customer'
import { FaMessage } from "react-icons/fa6";
import styles from '../customers/customers.module.css'


const Customers = () => {
    let product=[
        {
            icon:<FaMessage />,
            text:"Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
            name:"- Client Name, Location"
        },
        {
            icon:<FaMessage />,
            text:"Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
            name:"- Client Name, Location"
        }
    ]
  return (
    <div>
        <h3 className={styles.title}>Customer testimonials</h3>
        <p className={styles.txt}>Our customers love working with us</p>
      {product.map((product,index)=>{
        return(
            <Customer
            key={index}
            icon={product.icon}
            text={product.text}
            name={product.name}
            />
        )

      })}
      
    </div>
  )
}

export default Customers
