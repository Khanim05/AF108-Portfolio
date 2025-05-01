import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import {Link} from 'react-router-dom'


const Wrapper = () => {

const {wishlistProducts}=useSelector((prod)=>prod.wishlist)
  return (
    <div style={{
         display:"flex", 
         gap:"10px",
         fontSize:"20px",
         cursor:"pointer"}}>
        <Link to={"/wishlist"} style={{textDecoration:"none", color:"white"}}>
            <FaHeart 
        /> <sup style={{
            fontWeight:"bold",
            fontSize:"18px",
            marginLeft:"3px"}}>{wishlistProducts.length}</sup>
          </Link>
          <Link to={"/basket"} style={{
            textDecoration:"none",
             color:"white"}}>
          <FaShoppingBasket /> 
          <sup style={{
            fontWeight:"bold",
            fontSize:"18px",
            marginLeft:"3px"}}>0</sup>
          </Link>
        
        
    </div>
  )
}

export default Wrapper
