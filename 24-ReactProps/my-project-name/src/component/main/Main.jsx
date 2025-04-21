import React from 'react'
import MainTitle from '../mainTitle/MainTitle'
import MainTxt from '../mainTxt/MainTxt'
import Button from '../button/Button'
import '../main/Main.css'

const Main = () => {
    // let Customstyle={
    //     backgroundColor:" #ffc800",
    //     padding: "20px 40px",
    //     color: " white ",
    //     border: "none",
    //     fontWeight:"bold",
    //     borderRadius:"4px",
    //     fontSize:"20px",
    //     marginTop:"20px",
    // }
  return (
    <div className='mainArea'>
      <MainTitle/>
      <MainTxt/>
      <Button>TELL ME MORE</Button>
    </div>
  )
}
console.log(Button)

export default Main
