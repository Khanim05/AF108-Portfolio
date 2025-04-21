import React from 'react'
import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer_area container' style={{display:"flex" , gap:"20px", marginTop:"50px"}}>
      <p>Copyright © Your Website 2023</p>
      <div className='icon' style={{marginLeft:"250px" ,fontSize:"17px", display:"flex", flexDirection:"row", gap:"10px"}}>
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
      </div>
      <span style={{marginLeft:"300px"}}>Privacy Policy</span>
      <span>Terms of Use</span>
    </div>
  )
}

export default Footer
